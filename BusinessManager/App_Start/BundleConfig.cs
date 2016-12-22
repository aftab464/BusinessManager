using System.Web.Optimization;

namespace BusinessManager
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                       "~/Scripts/jquery-{version}.js", "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"

                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryvalUnobtrusive").Include(
                       "~/Scripts/jquery.validate*", "~/Scripts/jquery.unobtrusive-ajax.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/bootstrap-switch.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/bootstrap-switchCSS").Include(
                      "~/Content/bootstrap-switch.css"
                      ));
            bundles.Add(new StyleBundle("~/Content/css").Include(
                    "~/Content/bootstrap.css",
                    "~/Content/site.css",
                    "~/Content/bootstrap-switch.css"
                    ));

            bundles.Add(new StyleBundle("~/Content/themes/base/datepicker").Include(

                     "~/Content/themes/base/datepicker.css"
                     ));

            bundles.Add(new StyleBundle("~/Content/tokenify").Include(
                "~/Content/BM/css/plugins/bootstrap-tokenfield.css",
                "~/Content/BM/css/plugins/docs.css",
                "~/Content/BM/css/plugins/pygments-manni.css",
                "~/Content/BM/css/plugins/tokenfield-typeahead.css"
                ));

            bundles.Add(new ScriptBundle("~/Scripts/BM/bm_js").Include(
                     "~/Scripts/BM/js/vendor/modernizr-2.8.3.js",
                     "~/Scripts/BM/js/plugins.js",
                     "~/Scripts/BM/js/main.js",
                     "~/Scripts/jquery.validate.js",
                    "~/Scripts/BM/js/bootstrap-tokenfield.js",
                    "~/Scripts/BM/js/persist-min.js",
                    "~/Scripts/BM/js/persist-all-min.js",
                    "~/Scripts/BM/js/readmore.min.js",
                    "~/Scripts/BM/js/vendor/jquery.fancybox.js",
                   "~/Scripts/BM/js/additional-methods.js"
                     ));

            bundles.Add(new ScriptBundle("~/Scripts/BM/jQuery").Include(
                        "~/Scripts/BM/js/vendor/jquery-1.11.3.min.js", "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new StyleBundle("~/Content/BM/css/bm_css").Include(
                     "~/Content/BM/css/style.css"

                     ));

            bundles.Add(new StyleBundle("~/Content/BM/css/plugins/AddApp").Include(
                     "~/Content/BM/css/plugins/_mutipleSelectionDropDown.css"
                     ));

            bundles.Add(new StyleBundle("~/Content/BM/css/reviewtoolcss").Include(
         "~/Content/BM/css/reviewtoolstyle.css"
         ));
            bundles.Add(new StyleBundle("~/Content/BM/css/plugins/AppPages").Include(
                     "~/Content/BM/css/plugins/_mutipleSelectionDropDown.css",
                     "~/Content/BM/css/plugins/sweetalert.css"
                     ));

            bundles.Add(new ScriptBundle("~/Scripts/BM/sweetalert").Include(
                       "~/Scripts/sweetalert-dev.js"));

            bundles.Add(new StyleBundle("~/Content/BM/css/plugins/sweetalert").Include(
                    "~/Content/BM/css/plugins/sweetalert.css"
                    ));
            bundles.Add(new ScriptBundle("~/Scripts/BM/datetimepicker").Include(
                       "~/Scripts/jquery.datetimepicker.js"));

            bundles.Add(new StyleBundle("~/Content/BM/css/plugins/datetimepicker").Include(
                    "~/Content/BM/css/plugins/jquery.datetimepicker.css"
                    ));

            bundles.Add(new StyleBundle("~/Content/BM/css/allPatientscss").Include(
                   "~/Content/BM/css/allPatients.css"
                    ));
            bundles.Add(new ScriptBundle("~/Scripts/jQuery-fileUpload").Include(
                  "~/Scripts/jquery.ui.widget.js",
                  "~/Scripts/jquery.fileupload.js",
                  "~/Scripts/jquery.iframe-transport.js"));


            bundles.Add(new StyleBundle("~/Content/BM/css/AdminSectioncss").Include(
                "~/Content/BM/css/AdminSection/style.css",
               "~/Content/BM/css/AdminSection/adminSection.css"
                   ));

            bundles.Add(new ScriptBundle("~/Scripts/BM/js/vendorjs").Include(
           "~/Scripts/BM/js/vendor/simplePopup.js"));

            bundles.Add(new ScriptBundle("~/Scripts/BM/js/navAccordionjs").Include(
           "~/Scripts/BM/js/vendor/navAccordion.min.js"));
        }
    }
}
