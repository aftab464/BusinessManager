[assembly: WebActivator.PostApplicationStartMethod(typeof(BusinessManager.MVC.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace BusinessManager.MVC.App_Start
{
    using SimpleInjector;
    using SimpleInjector.Integration.Web;
    using System.Reflection;

    public static class SimpleInjectorWebApiInitializer
    {
        /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
        public static void Initialize()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebRequestLifestyle();
            container.RegisterMvcControllers(Assembly.GetExecutingAssembly());
            InitializeContainer(container);
        }

        private static void InitializeContainer(Container container)
        {
            //Infrastructure.DependecyResolution.ConfigModule.Load(container);
            //Infrastructure.DependecyResolution.RepositoryModule.Load(container);
        }
    }
}