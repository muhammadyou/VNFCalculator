angular.module("MyServices", [])

    .factory("SideMenuData", function() {

        var data =[
            {"heading": "Home", "state": "main.home", "id": null},
            {"heading": "Executive Message", "state": "main.executivesMessage", "id": null},
            {"heading": "Updates", "state": "main.updates", id:null},
            {"heading":"Sahaab Program", "state": "main.program", "id": null},
            {"heading": "Emerging Technologies", "state": "main.emergingTech", "id": null}
        ]


        return {
            get: function(){
                return data;
            }
        }


    })


    .factory("Carousel", function($q, $http) {

        var objBag = {};
        objBag.slides = function() {
            var defer = $q.defer();
            $http.get("data/slidesData.json").success(function(response){
                defer.resolve(response);
            }).error(function(error){
                alert(JSON.stringify(error));
            })
            return defer.promise;

        };

        return objBag;


    })


    .factory("RadarChart", function() {

        var labels =["Service Provisioning/Time-to-Market", "Digital Services Enablement", "Security", "Platform Openness and APIs", "Data Center Hardware", "Hypervisor, Orchestrator, Controller", "Organizational Agility", "Leadership/Ownership", "Network Operations", "Governance", "Customer Experience"];
        var status = [
            [0, 0, 0, 1, 1, 1, 1, 3, 1, 1,0],
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5]
        ];

        return {
            getLabels: function(){
                return labels;
            },
            getStatus: function(){
                return status;
            }
        }



    })

    .factory("NMMdata", function() {

        var phaseDetails = [
            {
                type: "Phase 0",
                details : [
                    {info: "Changes to Existing Services take place only during scheduled maintenance windows" },
                    {info: "New services may take weeks or months to bring to market" },
                    {info: "Plan and provide infrastructure processes for dedicated proprietary appliances including the commissioning for service generally takes 12-18 months, which leads to over procurement to handle unexpected future demands." },
                    {info: "IT servers available “Commercially Oﬀ The Shelf” – no virtualization" }

                ]
            },

            {
                type: "Phase 1",
                details : [
                    {info: "Changes to Existing Services take place only during scheduled maintenance windows" },
                    {info: "New services may take weeks or months to bring to market" },
                    {info: "Plan and provide infrastructure processes for dedicated proprietary appliances including the commissioning for service generally takes 12-18 months, which leads to over procurement to handle unexpected future demands." },
                    {info: "IT servers available “Commercially Oﬀ The Shelf” – no virtualization" }
                ]
            },

            {
                type: "Phase 2",
                details : [
                    {info: "Faster onboarding of VNFs with centralized control for rapid service delivery" },
                    {info: "Improved service monitoring, speeding, and hardened solutions to market" },
                    {info: "More innovative solutions" }
                ]
            },



            {
                type: "Phase 3",
                details : [
                    {info: "Changes to Existing Services take place only during scheduled maintenance windows" },
                    {info: "New services may take weeks or months to bring to market" },
                    {info: "Plan and provide infrastructure processes for dedicated proprietary appliances including the commissioning for service generally takes 12-18 months, which leads to over procurement to handle unexpected future demands." },
                    {info: "IT servers available “Commercially Oﬀ The Shelf” – no virtualization" }
                ]
            },

            {
                type: "Phase 5",
                details : [
                    {info: "Changes to Existing Services take place only during scheduled maintenance windows" },
                    {info: "New services may take weeks or months to bring to market" },
                    {info: "Plan and provide infrastructure processes for dedicated proprietary appliances including the commissioning for service generally takes 12-18 months, which leads to over procurement to handle unexpected future demands." },
                    {info: "IT servers available “Commercially Oﬀ The Shelf” – no virtualization" }
                ]
            }


        ]


        var currentStatus = [
            {
                value: 'Business and Services',
                data: [
                    {area: "Service Provisioning/Time-To-Market",  statusHeading: "Phase 0: No Virtualization", statusDetails: "Phase 0",  role: 'Business and Services'},
                    {area: "Digital Services Enablement",  statusHeading: "Phase 0: No Virtualization", statusDetails: "Phase 0",  role: 'Business and Services'},
                    {area: "Security", statusHeading: "Phase 0: No Virtualization", statusDetails: "Phase 0",  role: 'Business and Services'}
                ]
            },
            {
                value: 'Technology',
                data: [
                    {area: "Platform Openness and APIs", statusHeading: "Phase 1: Standalone VNFs", statusDetails: "Phase 1", role: 'Technology'},
                    {area: "Data Center Hardware", statusHeading: "Phase 1: Standalone VNFs", statusDetails: "Phase 1", role: 'Technology'},
                    {area: "Hypervisor, Orchestrator, and Controller", statusHeading: "Phase 0: No Virtualization", statusDetails: "Phase 0", role: 'Technology'},
                ]
            },
            {
                value: 'Organization, Governance',
                data: [
                    {area: "Organizational Agility", statusHeading: "Phase 1: Standalone VNFs", statusDetails: "Phase 1", role: 'Organization, Governance'},
                    {area: "Leadership/Ownership", statusHeading: "Phase 3: Common Info Models", statusDetails: "Phase 3", role: 'Organization, Governance'},
                    {area: "Network Operations", statusHeading: "Phase 1: Standalone VNFs", statusDetails: "Phase 1",  role: 'Organization, Governance'},
                    {area: "Governance",statusHeading: "Phase 1: Standalone VNFs", statusDetails: "Phase 1",  role: 'Organization, Governance'}
                ]
            },
            {
                value: 'Customer',
                data: [
                    {area: "Customer Experience", statusHeading: "Phase 0: No Virtualization", statusDetails: "Phase 0", role: 'Customer'}
                ]
            }
        ]


        return {
            getCurrentStatus: function(){
                return currentStatus;
            },
            getPhases: function(){
                return phaseDetails;
            }
        }


    })


    .factory("IntelBar", function($q, $http) {   // Data for Intel Bar Chart

        var objBag = {};
        objBag.data = function() {
            var defer = $q.defer();
            $http.get("data/IntelBarData.json").success(function(response){
                defer.resolve(response);
            }).error(function(error){
                alert(JSON.stringify(error));
            })
            return defer.promise;

        };

        return objBag;


    })


    .factory("AchievData", function($timeout) {  // Data for Achievenemts on the home page

        var data = [
            {"image": 'img/achievTrack1.png', "description": "", "title": "tin"},
            {"image": 'img/achievTrack2.png', "description": "", "title": "tin"},
            {"image": 'img/achievTrack3.png', "description": "", "title": "tin"},
            {"image": 'img/achievTrack4.png', "description": "", "title": "tin"}
        ]

        var currentIndex = 0;

        var isCurrentSlideIndex = function(index){
            return currentIndex === index;
        }

        var goBack = function(index){
            $timeout(function(){
                if(index > 0){
                    currentIndex = currentIndex - 1;

                }
            },100)


        }
        var goForth = function(index){
            $timeout(function(){
                if(index < data.length - 1){
                    currentIndex = currentIndex + 1;
                }
            }, 100)


        }



        return {
            get: function(){
                return data;
            },

            getCurrIndex: function(index){
              return isCurrentSlideIndex(index)
            },

            getNextImage : function(index){
                return goForth(index)
            },

            getPrevImage: function(index){
                return goBack(index)
            }
        }


    })


    .factory("UpdatesData", function() {  // Data for Updates Link
        var newsData = [
            {"image": 'img/newsIntel.png', "description": "", "title": "Etisalat Intel Partnership"},
            {"image": 'img/newsNFVI.png', "description": "", "title": "First NFVI"},
            {"image": 'img/newsvEPC.png', "description": "", "title": "First Cloudified Service"}
        ]


        var blogData = [
            {
                "image": "img/alkaaf.png",
                "name": "Ali Alkaff",
                "title": "Enabling our Digital Transformation",
                "position": "Senior Director",
                "dept": "Emerging Technologies",
                "role": "Sahaab Program Lead",
                "date": "3 April 2015",
                "content" : [
                    {"para": "One thing is for sure— We should be grateful that Etisalat UAE is filled with caring, progressive and future-seeking people, both in the leadership team and in our midst. This critical mass of minds and intentions have no choice but to coalesce for something good, something lasting, something empowering."},
                    {"para": "And that's probably the best value I could attribute to NFV and SDN: Empowering Etisalat to lead in its digital transformation in the new age. It has been all hard work and late night collaborations in the last two years. And it was worth it. We're well on our way to launch the first NFV Infrastructure (NFVI) in Etisalat, a telecom cloud powered by Internet-age open software and hardware, to unlock our future agility. The first virtualised services on top of the NFVI shall be those of the EPC, e.g. vPGW, vSGW and vMME. Next, together with the CPE team, Business Marketing and Consumer Marketing, we aim to cloudify the CPE for businesses and homes, respectively. As a golden rule, customer-centric service orchestration shall be at the heart of all these projects."},
                    {"para": "As and when services become ripe for cloudification, the NFVI will need to expand from the current 5 sites to the rest of the network, enabling a software-defined fluid infrastructure fit for our transformation to the digital age. What needs to be distributed, can be. And this will strongly be driven by IoT, 5G and the increasing data traffic. Nonetheless, the expansion will take time and will entail huge efforts and a myriad of challenges, and no single team in any telecom can go at it alone. That's why it's a corporate program, and not just an engineering function. Our digital transformation may be about technologies, but it begins and ends with you. And in the coming months, we can't wait to tell you how."},
                    {"para": "Welcome aboard,"}
                ]
            }
        ]


        return {
            getNews: function() {
                return newsData;
            },

            getBlog: function(){
                return blogData;
            }
        }


    })



