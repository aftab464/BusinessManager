using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BusinessManager.Startup))]
namespace BusinessManager
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
