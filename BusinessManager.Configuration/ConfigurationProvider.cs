using BusinessManager.Infrastructure.Interfaces;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Configuration;

namespace BusinessManager.Configuration
{

    /// <summary>
    /// To get configuration(appsettings) and connectionstrings
    /// </summary>
    public class ConfigurationProvider : IConfiguration
    {
        private static readonly NameValueCollection _appSettings;
        private static readonly ConnectionStringSettingsCollection _connectionStrings;

        static ConfigurationProvider()
        {
            _appSettings = ConfigurationManager.AppSettings;
            _connectionStrings = ConfigurationManager.ConnectionStrings;
        }

        /// <summary>
        /// To get configuration(appsettings) key
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public string GetConfiguration(string key)
        {
            var appSetting = _appSettings[key];
            if (string.IsNullOrWhiteSpace(appSetting)) throw new ConfigurationNotFoundException(key);
            return appSetting;

        }

        /// <summary>
        /// To get app configuration(appsettings) key casted in type T
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <returns></returns>
        public T GetConfiguration<T>(string key)
        {
            var appSetting = _appSettings[key];
            if (string.IsNullOrWhiteSpace(appSetting)) throw new ConfigurationNotFoundException(key);

            var converter = TypeDescriptor.GetConverter(typeof(T));
            return (T)(converter.ConvertFromInvariantString(appSetting));
        }

        /// <summary>
        /// To set app configuration(appsettings) key with value
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public bool SetConfiguration(string key, string value)
        {
            //To update configuration section in running application config while _appSettings deals with in-memory configuration.
            var configFile = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
            var settings = configFile.AppSettings.Settings;
            if (settings[key] == null)
            {
                settings.Add(key, value);
                _appSettings.Add(key, value);
            }
            else
            {
                settings[key].Value = value;
                _appSettings[key] = value;
            }
            configFile.Save(ConfigurationSaveMode.Modified);
            ConfigurationManager.RefreshSection(configFile.AppSettings.SectionInformation.Name);
            return true;
        }

        /// <summary>
        /// To get connection string by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns>ConnectionStringSettings as object</returns>
        public object GetConnectionString(string name)
        {
            return _connectionStrings[name];
        }

    }
}
