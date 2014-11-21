(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* graphic button  sobre */
    $(document).on("click", "#sobre", function(evt)
    {
         activate_subpage("#sobre1"); 
    });
    
        /* graphic button  home */
    
    
        /* graphic button  home */
    $(document).on("click", "#home", function(evt)
    {
         activate_subpage("#page_86_70"); 
    });
    
        /* graphic button  servicos */
    
    
        /* graphic button  servicos */
    $(document).on("click", "#servicos", function(evt)
    {
         activate_subpage("#servicos1"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
