$(document).ready(function() {

  //Button Toggle (Hamburger bar)
  $("#sidebar-toggle , #left-sidebar-checkbox").on("click", function() {
    $(".tree-view,.logo-text").toggleClass("delete");
    $(".content-body , .navbar-custom-menu , #footer , .sidebar ,.logo").toggleClass(
      "mini"
    );
    //For Fixed State when press the button
    $(
      "main-header.fixed-top , #footer.fixed , .content-body.fixed"
    ).toggleClass("active");
    //
    //Mini Fixed Mode Hover
    $(".hover-1").hover(function() {
      $(".tree-view , .logo-text").toggleClass("delete");
      $(".sidebar").toggleClass("mini");
      $(".navbar-custom-menu,.logo").toggleClass("mini");
    });
    $(".sidebar").toggleClass("hover-2");
  });
  //For Setting Sidebar
  $("#setting-toggle").on("click", function() {
    $("#setting-sidebar").toggleClass("delete");

    //Slide on hover mode
    $("#setting-sidebar.slide-on").toggleClass("delete");
    $("#setting-sidebar.slide-on").toggleClass("active");
    $("#sidebar-right.slide-on, .tab-content.slide-on").toggleClass("active");
  });
  //Fixed Toggle Button
  $("#fixed-checkbox").on("click", function() {
    //Expand sidebar on hover mode
    if (
      $(".sidebar.HoverMode").hasClass("mini") ||
      $(".sidebar.HoverMode").hasClass("SideHoverExp") ||
      $(".sidebar.HoverMode").hasClass("fixed-top")
    ) {
      // Trigger expand sidebar hover mode when mini sidebar or expanded sidebar
      $(".navbar , .sidebar").toggleClass("SideHoverExp");
      $("#footer , .content-body").toggleClass("SideHoverExp");
      $("#footer , .sidebar , .content-body").toggleClass("fixed");
      $(".main-header, .sidebar").toggleClass("fixed-top");
      $("#setting-sidebar").toggleClass("fixed");
    } else {
      //Normal Fixed Mode
      $("#setting-sidebar").toggleClass("fixed");
      $(".main-header, .sidebar").toggleClass("fixed-top");
      $("#footer , .sidebar , .content-body").toggleClass("fixed");

      //Mini fixed Mode Hover
      $(".sidebar").toggleClass("hover-1");
      $(".hover-2").hover(function() {
        $(".tree-view , .sideHeader").toggleClass("delete");
        $(".sidebar").toggleClass("mini");
        $("#mainHeader").toggleClass("mini");
      });
    }
  });
  //Boxed Toggle Button
  $("#boxed-layout").on("click", function() {
    $(".page-wrap").toggleClass("boxed-layout");
  });
  //sidebar Expand on hover
  $("#hover-checkbox").on("click", function() {
    $(".sidebar,.logo").addClass("HoverMode");

    if ($(".sidebar").hasClass("mini")) {
      //When the sidebar mini mode
      $(this).attr("disabled", "true");
      $(".sidebar").toggleClass("hover-1");
      $(".logo, .sidebar").addClass("SideHoverExp");
      $("#footer , .content-body").addClass("SideHoverExp");

      $(".hover-2").hover(function() {
        $(".tree-view , .logo-text").toggleClass("delete");
        $(".sidebar,.logo").toggleClass("mini");
        $(".navbar-custom-menu").toggleClass("mini");
      });
    } else {
      //When sidebar expand
      $(this).attr("disabled", "true");
      $(".sidebar").toggleClass("hover-1");
      $(".navbar-custom-menu , .sidebar").toggleClass("SideHoverExp");
      $("#footer , .content-body").toggleClass("SideHoverExp");
      $(".logo-text , .tree-view").toggleClass("delete");
      $(".content-body , .navbar-custom-menu , #footer , .sidebar,.logo").toggleClass(
        "mini"
      );

      $(".hover-1").hover(function() {
        $(".tree-view ,.logo-text").toggleClass("delete");
        $(".sidebar,.logo").toggleClass("mini");
        $(".navbar-custom-menu").toggleClass("mini");
      });
    }
  });

  //Right sidebar Slide
  $("#right-slide-checkbox").on("click", function() {
    $(".content-body").toggleClass("slide-on");
    $("#setting-sidebar").toggleClass("slide-on");
    $("#sidebar-right, .tab-content").toggleClass("slide-on");
  });
  //

  //For a close button
  $("[data-interact='close']").on("click", function() {
    $(this).parents("[data-dismiss='close']")
      .animate(
        {
          left: "+=50",
          height: "toggle"
        },
        1000,
        function() {
          $(this)
            .parents("[data-dismiss='close']")
            .remove();
        }
      );
  });

  //Right sidebar skin
  $("#right-sidebar-skin").on("click", function() {
    $(
      "#setting-sidebar , .sub-heading-font , .control-sidebar-heading , .control-sidebar-p-tag, .skin-font,.menu-info-h6,.menu-info-p,.menu-info-loadbar"
    ).toggleClass("light-mode");
  });

  //Skin
  //Blue
  $("#blue-skin").on("click", function() {
    $(".navbar-custom-menu").css("backgroundColor", "#3C8DBC");
    $(".logo").css("backgroundColor", "#367FA9");
    $(".header-icon,.logo-text,#sidebar-toggle,.user-tag,.online-tag").css(
      "color",
      "#FFFFFF"
    );
    $(".sidebar,.menu-trigger,.dropdown-header,.option-text").css(
      "color",
      "#96c7ce"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#222d32"
    );
  });
  //Black
  $("#black-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#FFFFFF");
    $(".header-icon,#sidebar-toggle,.logo,.user-tag").css("color", "#000000");
    $(".sidebar,.online-tag").css("color", "#FFFFFF");
    $(".sidebar,.menu-trigger,.dropdown-header,.option-text").css(
      "color",
      "#96c7ce"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#222d32"
    );
  });
  //Purple
  $("#purple-skin").on("click", function() {
    $(".navbar-custom-menu").css("backgroundColor", "#605CA8");
    $(".logo").css("backgroundColor", "#555299");
    $(".header-icon,#sidebar-toggle,.logo,.user-tag,.online-tag").css(
      "color",
      "#FFFFFF"
    );
    $(".sidebar,.menu-trigger,.dropdown-header,.option-text").css(
      "color",
      "#96c7ce"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#222d32"
    );
  });
  //Green
  $("#green-skin").on("click", function() {
    $(".navbar-custom-menu").css("backgroundColor", "#00A65A");
    $(".logo").css("backgroundColor", "#008d4c");
    $(".header-icon,#sidebar-toggle,.logo,.user-tag,.online-tag").css(
      "color",
      "#FFFFFF"
    );
    $(".sidebar,.menu-trigger,.dropdown-header,.option-text").css(
      "color",
      "#96c7ce"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#222d32"
    );
  });
  //Red
  $("#red-skin").on("click", function() {
    $(".navbar-custom-menu").css("backgroundColor", "#DD4B39");
    $(".logo").css("backgroundColor", "#d73925");
    $(".header-icon,#sidebar-toggle,.logo,.user-tag,.online-tag").css(
      "color",
      "#FFFFFF"
    );
    $(".sidebar,.menu-trigger,.dropdown-header,.option-text").css(
      "color",
      "#96c7ce"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#222d32"
    );
  });
  //Yellow
  $("#yellow-skin").on("click", function() {
    $(".navbar-custom-menu").css("backgroundColor", "#F39C12");
    $(".logo").css("backgroundColor", "#e08e0b");
    $(".header-icon,#sidebar-toggle,.logo,.user-tag,.online-tag").css(
      "color",
      "#FFFFFF"
    );
    $(".sidebar,.menu-trigger,.dropdown-header,.option-text").css(
      "color",
      "#96c7ce"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#222d32"
    );
  });
  //Blue Light
  $("#blue-light-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#3C8DBC");
    $(".sidebar,.online-tag,.user-panel,.menu-trigger,.dropdown-header").css(
      "color",
      "#000000"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#F9FAFC"
    );
    $(".logo,.header-icon,#sidebar-toggle,.user-tag").css("color", "white");
    $(".option-text").css("color", "grey");
  });
  //Black Light
  $("#black-light-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#FFFFFF");
    $(".sidebar,.online-tag,.user-panel,.menu-trigger,.dropdown-header").css(
      "color",
      "#000000"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#F9FAFC"
    );
    $(".logo,.header-icon,#sidebar-toggle,.user-tag").css("color", "black");
    $(".option-text").css("color", "grey");
  });
  //Purple Light
  $("#purple-light-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#605CA8");
    $(".sidebar,.online-tag,.user-panel,.menu-trigger,.dropdown-header").css(
      "color",
      "#000000"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#F9FAFC"
    );
    $(".logo,.header-icon,#sidebar-toggle,.user-tag").css("color", "white");
    $(".option-text").css("color", "grey");
  });
  //Green Light
  $("#green-light-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#00A65A");
    $(".sidebar,.online-tag,.user-panel,.menu-trigger,.dropdown-header").css(
      "color",
      "#000000"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#F9FAFC"
    );
    $(".logo,.header-icon,#sidebar-toggle,.user-tag").css("color", "white");
    $(".option-text").css("color", "grey");
  });
  //Red Light
  $("#red-light-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#DD4B39");
    $(".sidebar,.online-tag,.user-panel,.menu-trigger,.dropdown-header").css(
      "color",
      "#000000"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#F9FAFC"
    );
    $(".logo,.header-icon,#sidebar-toggle,.user-tag").css("color", "white");
    $(".option-text").css("color", "grey");
  });
  //Yellow Light
  $("#yellow-light-skin").on("click", function() {
    $(".logo,.navbar-custom-menu").css("backgroundColor", "#F39C12");
    $(".sidebar,.online-tag,.user-panel,.menu-trigger,.dropdown-header").css(
      "color",
      "#000000"
    );
    $(".sidebar,.side-title,.menu-option,.dropdown-header,.searchbox").css(
      "backgroundColor",
      "#F9FAFC"
    );
    $(".logo,.header-icon,#sidebar-toggle,.user-tag").css("color", "white");
    $(".option-text:hover").css("color", "grey");
  });
});
