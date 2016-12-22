using BusinessManager.Configuration;
using BusinessManager.Infrastructure.Interfaces;
using SimpleInjector;



namespace BusinessManager.Infrastructure.DependecyResolution
{
    public class ConfigModule
    {
        public static void Load(Container container)
        {

            container.Register<IConfiguration, ConfigurationProvider>();


        }
    }
}
