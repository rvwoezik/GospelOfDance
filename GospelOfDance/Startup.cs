using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GospelOfDance.Startup))]
namespace GospelOfDance
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
