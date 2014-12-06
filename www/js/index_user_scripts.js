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
    
    
        /* graphic button  servicos */
    
    
        /* graphic button  servicos */
    
    
        /* graphic button  servicos */
    $(document).on("click", "#servicos", function(evt)
    {
         activate_subpage("#servi"); 
    });
    
        /* graphic button  noticias */
    
    
        /* graphic button  noticias */
    
    
        /* graphic button  noticias */
    
    
        /* graphic button  noticias */
    $(document).on("click", "#noticias", function(evt)
    {
         activate_subpage("#news"); 
    });
    
        /* listitem  not1 */
    $(document).on("click", "#not1", function(evt)
    {
         activate_subpage("#ver_noticia"); 
    });
    
        /* graphic button  home */
    
    
        /* graphic button  home */
    $(document).on("click", "#home", function(evt)
    {
         activate_subpage("#page_86_70"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
