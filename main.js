
      jQuery(document).ready(function () {
      var activeNations = new Array('af', 'bd','cd','et','gh','hi','in','ip','ke','lr','mg','ml','mw','mz','np','ng','pk','rw','sn','ss','tz','ug','ye','zm');
        jQuery('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#e2ecf6',
          color: '#cbcbcb',
          hoverOpacity: 0.7,
          enableZoom: true,
          showTooltip: true,
          scaleColors: ['#C8EEFF', '#006491'],
           focusOn: {
                        x: 1.5,
                        y: 1.5,
                        scale: 2
                        },
          /*values: sample_data,*/
          borderColor: '#ffffff',
          normalizeFunction: 'polynomial',
          selectedColor: '#002f6c',
           onRegionOver: function (event, code, region) {
            if (activeNations.indexOf(code) === -1) {
                event.preventDefault();
            }
        },
        onRegionClick: function (element, code, region) {
            if (activeNations.indexOf(code) > -1) {
                // dom interaction outside the map
                // ...
            } else {
                element.preventDefault();
            }
        },
        onRegionSelect: function (event, code, region) {
             if (activeNations.indexOf(code) > -1) {
                switch (code) {
                    case 'af':
                 document.getElementById("paragraf").innerHTML = "<h1>Afganistan</h1><p>Hello World!</p>";
                 document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                    case 'bd':
                  document.getElementById("paragraf").innerHTML = "<h1>Banglades</h1><p>Hello World!</p>";
                  document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                    case 'cd':
                   document.getElementById("paragraf").innerHTML = "<h1>Congo</h1><p>Hello World!</p>";
                   document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                    case 'et':
                    document.getElementById("paragraf").innerHTML = "<h1>Ethopia</h1><p>Hello World!</p>!";
                    document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                    case 'gh':
                      document.getElementById("paragraf").innerHTML = "<h1>Ghana</h1><p>Hello World!</p>!";
                      document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                    case 'hi':
                      document.getElementById("paragraf").innerHTML = "<h1>Haiti</h1><p>Hello World!</p>!";
                      document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                    case 'in':
                       document.getElementById("paragraf").innerHTML = "<h1>Indonesia</h1><p>Hello World!</p>!";
                       document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                     case 'ip':
                        document.getElementById("paragraf").innerHTML = "<h1>Ip</h1><p>Hello World!</p>";
                        document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                       case 'ke':
                        document.getElementById("paragraf").innerHTML = "<h1>Kenya</h1><p>Hello World!</p>";
                        document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                      case 'lr':
                        document.getElementById("paragraf").innerHTML = "<h1>Liberia</h1><p>Hello World!</p>";
                        document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                        break;
                      case 'mg':
                         document.getElementById("paragraf").innerHTML = "<h1>Madagascar</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                      case 'ml':
                         document.getElementById("paragraf").innerHTML = "<h1>Mali</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                       case 'mw':
                         document.getElementById("paragraf").innerHTML = "<h1>Malawi</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                        case 'mz':
                           document.getElementById("paragraf").innerHTML = "<h1>Mozambique</h1><p>Hello World!</p>";
                           document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'np':
                         document.getElementById("paragraf").innerHTML = "<h1>Nepal</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'ng':
                         document.getElementById("paragraf").innerHTML = "<h1>Nigeria</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'pk':
                         document.getElementById("paragraf").innerHTML = "<h1>Pakistan</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'rw':
                        document.getElementById("paragraf").innerHTML = "<h1>Rwanda</h1><p>Hello World!</p>";
                        document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'sn':
                          document.getElementById("paragraf").innerHTML = "<h1>Senegal</h1><p>Hello World!</p>";
                          document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'ss':
                         document.getElementById("paragraf").innerHTML = "<h1>Suriname</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'tz':
                        document.getElementById("paragraf").innerHTML = "<h1>Tanzania</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'ug':
                         document.getElementById("paragraf").innerHTML = "<h1>Uganda</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'ye':
                          document.getElementById("paragraf").innerHTML = "<h1>Yemen</h1><p>Hello World!</p>";
                          document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                           case 'zm':
                         document.getElementById("paragraf").innerHTML = "<h1>Zambia</h1><p>Hello World!</p>";
                         document.getElementById("paragraf").style.backgroundColor = "rgba(226,237,245,0.35)";
                         break;
                }
            } else
            event.preventDefault();
        },
           onLabelShow: function (event, label, code)
        {
            if (activeNations.indexOf(code) > -1) {
                switch (code) {
                    case 'af':
                        label.text('Afghanistan');
                        break;
                    case 'bd':
                        label.text('Bangladesh');
                        break;
                    case 'cd':
                        label.text('Congo');
                        break;
                    case 'et':
                        label.text('Ethopia');
                        break;
                    case 'gh':
                        label.text('Ghana');
                        break;
                    case 'hi':
                        label.text('Haiti');
                        break;
                    case 'in':
                        label.text('Indonesia');
                        break;
                     case 'ip':
                        label.text('Indonesia');
                        break;
                      case 'ke':
                        label.text('Kenya');
                        break;
                      case 'lr':
                        label.text('Liberia');
                        break;
                      case 'mg':
                        label.text('Madagascar');
                         break;
                      case 'ml':
                        label.text('Mali');
                         break;
                       case 'mw':
                        label.text('Malawi');
                         break;
                        case 'mz':
                        label.text('Mozambique');
                         break;
                           case 'np':
                        label.text('Nepal');
                         break;
                           case 'ng':
                        label.text('Nigeria');
                         break;
                           case 'pk':
                        label.text('Pakistan');
                         break;
                           case 'rw':
                        label.text('Rwanda');
                         break;
                           case 'sn':
                        label.text('Senegal');
                         break;
                           case 'ss':
                        label.text('Suriname');
                         break;
                           case 'tz':
                        label.text('Tanzania');
                         break;
                           case 'ug':
                        label.text('Uganda');
                         break;
                           case 'ye':
                        label.text('Yemen');
                         break;
                           case 'zm':
                        label.text('Zambia');
                         break;
                }
            } else {
                event.preventDefault();
            }
        }
        });
        jQuery('#vmap').vectorMap('set', 'colors', {af: '#9fc0e0',
                                                    bd: '#9fc0e0',
                                                    cd: '#9fc0e0',
                                                    et: '#9fc0e0',
                                                    gh: '#9fc0e0',
                                                    hi: '#9fc0e0',
                                                    in: '#9fc0e0',
                                                    ip: '#9fc0e0',
                                                    ke: '#9fc0e0',
                                                    lr: '#9fc0e0',
                                                    mg: '#9fc0e0',
                                                    ml: '#9fc0e0',
                                                    mw: '#9fc0e0',
                                                    mz: '#9fc0e0',
                                                    np: '#9fc0e0',
                                                    ng: '#9fc0e0',
                                                    pk: '#9fc0e0',
                                                    rw: '#9fc0e0',
                                                    sn: '#9fc0e0',
                                                    ss: '#9fc0e0',
                                                    tz: '#9fc0e0',
                                                    ug: '#9fc0e0',
                                                    ye: '#9fc0e0',
                                                    zm: '#9fc0e0',});
        document.getElementById('familyplanning').addEventListener("click",hoverChange);
function hoverChange() {
    document.getElementById('familyplanning').style.backgroundColor="#0000FF";
    document.getElementById('planing').style.color="#FFFFFF";
    document.getElementById('familyplanning.png').src = "images/section-our-approach-tab2-inv.png";
    document.getElementById('mother').style.backgroundColor="lightgrey";
    document.getElementById('malaria').style.backgroundColor="lightgrey";
    document.getElementById('nutrition').style.backgroundColor="lightgrey";
    document.getElementById('watersanitation').style.backgroundColor="lightgrey";
    document.getElementById('mother.png').src = "images/section-our-approach-tab1.png";
    document.getElementById('maternal').style.color="#4169E1";
    document.getElementById('malari').style.color="#4169E1";
    document.getElementById('nutritio').style.color="#4169E1";
    document.getElementById('hygiene').style.color="#4169E1";
    document.getElementById('malaria.png').src = "images/malaria.png";
    document.getElementById('nutrition.png').src = "images/nutrition.png";
    document.getElementById('watersanitation.png').src = "images/watersanitation.png";
    document.getElementById('row_img').style.background="url(images/Approach_FamilyPlanning.jpg) no-repeat center center ";
    document.getElementById('row_img').style.backgroundSize="cover";
     document.getElementById('maternall').innerHTML="FAMILY PLANNING";
       document.getElementById('badd').innerHTML="An estimated 214 million women want to delay or stop childbearing but can’t access contraception. Satisfying the global unmet need for family planning could reduce maternal deaths by 30 percent.";
       document.getElementById('survival').innerHTML="In our priority countries, the percent of demand for family planning satisfied by a modern method has increased from 45% in 2010 to 51% in 2015.";
}
document.getElementById('malaria').addEventListener("click",clickChange);
function clickChange() {
     document.getElementById('malaria').style.backgroundColor="#0000FF";
     document.getElementById('malaria.png').src = "images/section-our-approach-tab3-inv.png";
     document.getElementById('malari').style.color="#FFFFFF";
      document.getElementById('mother').style.backgroundColor="lightgrey";
     document.getElementById('mother.png').src = "images/section-our-approach-tab1.png";
     document.getElementById('maternal').style.color="#4169E1";
      document.getElementById('familyplanning').style.backgroundColor="lightgrey";
     document.getElementById('familyplanning.png').src = "images/familyplanning.png";
     document.getElementById('planing').style.color="#4169E1";
      document.getElementById('nutrition').style.backgroundColor="lightgrey";
     document.getElementById('nutrition.png').src = "images/nutrition.png";
     document.getElementById('nutritio').style.color="#4169E1";
      document.getElementById('watersanitation').style.backgroundColor="lightgrey";
     document.getElementById('watersanitation.png').src = "images/watersanitation.png";
     document.getElementById('hygiene').style.color="#4169E1";
     document.getElementById('row_img').style.background="url(images/Approach_Malaria.jpg) no-repeat center center ";
    document.getElementById('row_img').style.backgroundSize="cover";
     document.getElementById('maternall').innerHTML="MALARIA";
       document.getElementById('badd').innerHTML="Approximately 125 million pregnant women annually are at risk of contracting malaria. USAID-supported malaria interventions are implemented to reduce maternal and child mortality.";
       document.getElementById('survival').innerHTML="In countries supported by the President’s Malaria Initiative (PMI), nationwide surveys show significant declines in mortality rates among children under five, ranging from 18% to 67%";
}
document.getElementById('watersanitation').addEventListener("click",clickMe);
function clickMe() {
     document.getElementById('watersanitation').style.backgroundColor="#0000FF";
     document.getElementById('watersanitation.png').src = "images/section-our-approach-tab5-inv.png";
     document.getElementById('hygiene').style.color="#FFFFFF";
      document.getElementById('mother').style.backgroundColor="lightgrey";
     document.getElementById('mother.png').src = "images/section-our-approach-tab1.png";
     document.getElementById('maternal').style.color="#4169E1";
      document.getElementById('familyplanning').style.backgroundColor="lightgrey";
     document.getElementById('familyplanning.png').src = "images/familyplanning.png";
     document.getElementById('planing').style.color="#4169E1";
      document.getElementById('nutrition').style.backgroundColor="lightgrey";
     document.getElementById('nutrition.png').src = "images/nutrition.png";
     document.getElementById('nutritio').style.color="#4169E1";
      document.getElementById('malaria').style.backgroundColor="lightgrey";
     document.getElementById('malaria.png').src = "images/malaria.png";
     document.getElementById('malari').style.color="#4169E1";
      document.getElementById('row_img').style.background="url(images/Approach_WaterSanitationHygiene.jpg) no-repeat center center ";
      document.getElementById('row_img').style.backgroundSize="cover";
      document.getElementById('maternall').innerHTML="WATER, SANITATION & HYGIENE";
       document.getElementById('badd').innerHTML="Investments in water, sanitation and hygiene empower women, increase productivity and promote gender equality. Every $1 spent on improving sanitation results in an estimated $5 of economic gain.";
       document.getElementById('survival').innerHTML="Since 2014, USAID’s water activities have resulted in more than 4.3 million people with improved access to sanitation facilities.";
}
document.getElementById('nutrition').addEventListener("click",clickOn);
function clickOn() {
    document.getElementById('nutrition').style.backgroundColor="#0000FF";
    document.getElementById('nutrition.png').src = "images/section-our-approach-tab4-inv.png";
    document.getElementById('nutritio').style.color="#FFFFFF";
    document.getElementById('mother').style.backgroundColor="lightgrey";
     document.getElementById('mother.png').src = "images/section-our-approach-tab1.png";
     document.getElementById('maternal').style.color="#4169E1";
     document.getElementById('familyplanning').style.backgroundColor="lightgrey";
     document.getElementById('familyplanning.png').src = "images/familyplanning.png";
     document.getElementById('planing').style.color="#4169E1";
      document.getElementById('malaria').style.backgroundColor="lightgrey";
     document.getElementById('malaria.png').src = "images/malaria.png";
     document.getElementById('malari').style.color="#4169E1";
      document.getElementById('watersanitation').style.backgroundColor="lightgrey";
     document.getElementById('watersanitation.png').src = "images/watersanitation.png";
     document.getElementById('hygiene').style.color="#4169E1";
     document.getElementById('row_img').style.background="url(images/Approach_Nutrition.jpg) no-repeat center center ";
      document.getElementById('maternall').innerHTML="NUTRITION";
       document.getElementById('badd').innerHTML="Undernutrition leads to stunting, contributing to 45 percent of child deaths. USAID supports country-owned programs to address the root causes of undernutrition and improve futures for mothers and babies.";
       document.getElementById('survival').innerHTML="In 2015 alone, the U.S. Government reached nearly 18 million children globally with nutrition interventions.";
}
document.getElementById('mother').addEventListener("click",clickIn);
function clickIn(){
    document.getElementById('mother').style.backgroundColor="#0000FF";
    document.getElementById('mother.png').src = "images/mother.png";
    document.getElementById('maternal').style.color="#FFFFFF";
    document.getElementById('familyplanning').style.backgroundColor="lightgrey";
     document.getElementById('familyplanning.png').src = "images/familyplanning.png";
     document.getElementById('planing').style.color="#4169E1";
      document.getElementById('malaria').style.backgroundColor="lightgrey";
     document.getElementById('malaria.png').src = "images/malaria.png";
     document.getElementById('malari').style.color="#4169E1";
      document.getElementById('watersanitation').style.backgroundColor="lightgrey";
     document.getElementById('watersanitation.png').src = "images/watersanitation.png";
     document.getElementById('hygiene').style.color="#4169E1";
      document.getElementById('nutrition').style.backgroundColor="lightgrey";
     document.getElementById('nutrition.png').src = "images/nutrition.png";
     document.getElementById('nutritio').style.color="#4169E1";
     document.getElementById('row_img').style.background="url(images/slika11.jpg) no-repeat top center ";
      document.getElementById('row_img').style.backgroundSize="cover";
       document.getElementById('maternall').innerHTML="MATERNAL & CHILD HEALTH";
       document.getElementById('badd').innerHTML="Mothers and children play invaluable roles in families,communities,societles,and economles. One milion children are left motherless each year,and these children are then less likely to survive childhood.";
       document.getElementById('survival').innerHTML="Since 2008,USAID's maternal and child survival efforts have saved the lives of 4.6 milion children and 200,000 women in 25 priority countries.";
}
      });




