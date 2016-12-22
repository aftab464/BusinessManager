namespace BusinessManager.Infrastructure.Interfaces
{
    public interface IConfiguration
    {
        /// <summary>
        /// To get configuration(appsettings) key
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        string GetConfiguration(string key);

        /// <summary>
        /// To get app configuration(appsettings) key casted in type T
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <returns></returns>
        T GetConfiguration<T>(string key);

        /// <summary>
        /// To set app configuration(appsettings) key with value
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        bool SetConfiguration(string key, string value);

        /// <summary>
        /// To get connection string by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns>ConnectionStringSettings as object</returns>
        object GetConnectionString(string name);

    }
}
