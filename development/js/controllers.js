angular.module("MyControllers", [])

    .controller("HomeCtrl", function( SideMenuData, $state, $timeout, $stateParams,  $location, RadarChart, $anchorScroll, AchievData, carouselSlides, IntelBarData, NMMdata) {


        this.tgState =false;
        this.sideMenuUrl = SideMenuData.get();

        this.gotoState = function(state, param){  // not using anymore, need to CHECK

            if(param)
                $state.go('main.home', {scrollTo:param})  // if param is passed which means a section on homepage is requested, so go to that state
            else{
                param = null;
                $state.go(state, {scrollTo: param});   // if no param then without any param
            }
        }

        /*----------------------------------------------Carousel ---------------------------------------------------------*/
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        this.slides  = []
        this.slides= carouselSlides;
        var currIndex = 0;


        this.gotoRoute = function(obj){   // not using anymore, need to CHECK
            if(obj.route != "projects")
                $state.go(obj.route);
            else{
                $location.hash('projects')
                $anchorScroll();
            }

        }


        // Its not currently used, before i had links in the side menu which refer to the section on the same page
        //----------------------------Based on Param setting the window location after sidenav link clicked --------------------------//
        if($stateParams.scrollTo){   // check if stateparams is set
            $location.hash($stateParams.scrollTo);   // then scroll to that parameter passed which is the id of that content
            $anchorScroll();
        }

        // -----------------------------------------------NMM button

        this.activeTab = 0;  // set the projects tab by default
        this.goTo = function(id) {   // call the function if NMM button clicked
            this.activeTab = 1;      // switch the tab to NMM overview and the variable will be reset to zero if Projects tab is clicked or on home link is clicked
            $timeout(function() {    // then move to that location
                $location.hash(id);
                $anchorScroll();
            },50);
        }

        //---------------------------------Achievement Images --------------------------------------------------------------------//

        this.images = AchievData.get()



        this.isCurrentSlideIndex = function(index){
            return AchievData.getCurrIndex(index)
        }

        this.goBack = function(index){
            return AchievData.getPrevImage(index)
        }
        this.goForth = function(index){
            return AchievData.getNextImage(index)

        }


       //------------------------------------------VMI Radar Chart ----------------------------------------------------------//

        this.labels = RadarChart.getLabels();
        this.data = RadarChart.getStatus();

        this.options = {
            pointLabelFontSize : 14,
            pointLabelColor : "white",
            multiTooltipTemplate: function(label) {
                if(label.value == 5)
                    return 'Target' + ': Phase ' + label.value;

                else
                    return 'Current' + ': Phase ' + label.value;
            },
            getColor: function(){
                return{
                    "fillColor": "#00FF00",
                    "strokeColor": "white",
                    "pointColor": "#00FF00",
                    "pointStrokeColor": "#00FF00",
                    "pointHighlightFill":  "white",
                    "pointHighlightStroke": "#00FF00"
                }
            }

        };



        this.colors = [
            {
                "fillColor": "#00FF00",
                "strokeColor": "white",
                "pointColor": "#00FF00",
                "pointStrokeColor": "#00FF00",
                "pointHighlightFill":  "white",
                "pointHighlightStroke": "#00FF00"
            }
        ]

        //------------------------------------------VMI Bar Graph -------------------------------------------------------//

       this.data2 = NMMdata.getCurrentStatus();
       this.phases = NMMdata.getPhases();

        this.options1 = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: true,
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                xAxis: {
                    axisLabel: 'Area and Capabilities',
                    "axisLabelDistance": 5
                },
                yAxis: {
                    axisLabel: 'Maturity Model Phases'
                },
                yDomain:[0, 5]
            }
        };

        this.data1 = [
            {
                "key": "Etisalat Status",
                "values": IntelBarData

            }

        ]


    })



    .controller("UpdatesCtrl", function(UpdatesData){

        //------------------------------News: Around the Etisalat--------------------------------------//
        this.updData = UpdatesData.getNews();
        this.updSelected =  0;
        this.image = this.updData[0].image;
        this.title = this.updData[0].title;
        this.description = this.updData[0].description;  // description currently doesnt exist


        this.setImage = function(index){   // set News Image
            this.image = this.updData[index].image;
            this.title = this.updData[index].title;
            this.description = this.updData[index].description;
        }

        //----------------------------Blog--------------------------------------------------------//
        this.blogsData =  UpdatesData.getBlog();
        this.setLinkBg = function(){
            this.updSelected = 3;
        }



    })

