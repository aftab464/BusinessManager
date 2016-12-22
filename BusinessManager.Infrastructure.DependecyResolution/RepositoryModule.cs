using SimpleInjector;

namespace BusinessManager.Infrastructure.DependecyResolution
{
    public class RepositoryModule
    {

        public static void Load(Container container)
        {


            //container.Register<IBaseRepositoryContext>(() => new BaseRepositoryContext(Configuration.MySqlDefaultConnectionString));
            //// Get config service
            //container.Register<IRepositoryContext, DefaultRepositoryContext>(Lifestyle.Scoped);
            // For Scaffolding Dont delete below comment //
            // Add Binding Here //


            //container.Register<IArtifactRepository, ArtifactRepository>();
            //container.Register<IEmailTemplateRepository, EmailTemplateRepository>();

            ////var configService = container.GetInstance<IConfiguration>();


            ////var connectionString = (ConnectionStringSettings)configService.GetConnectionString(Configuration.MySqlDefaultConnectionString);

            ////if (connectionString.ProviderName.Trim() != string.Empty)
            ////{
            ////    var configs = new BusinessManager.Data.Migrations.Configuration
            ////    {
            ////        TargetDatabase =
            ////             new DbConnectionInfo(connectionString.ConnectionString, connectionString.ProviderName)
            ////    };
            ////    var migrator = new DbMigrator(configs);
            ////    if (migrator.GetPendingMigrations().Any())
            ////        migrator.Update();
            ////}
        }
    }
}
