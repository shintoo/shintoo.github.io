function TabController($scope) {
	var projectsTab = '<div class="container"> \
        <hr class="breaker"> \
        <div class="row holder"> \
          <div class="col-sm-4 hover item-fade"> \
            <a href="https://github.com/shintoo/Saturn" class="hover"> \
              <div class="panel panel-default"> \
                <div class="panel-head text-center"> \
                  <h3>Saturn</h3> \
                </div> \
                <div class="panel-body text-center"> \
                  <p>Interpreted language built in C.</p> \
                  <img src="assets/saturn.png" alt="Saturn-img"> \
                </div> \
              </div> \
            </a> \
          </div> \
          <div class="col-sm-4 hover item-fade"> \
            <a href="https://github.com/BillingEmail/Drawblade" class="hover"> \
              <div class="panel panel-default"> \
                <div class="panel-head text-center"> \
                  <h3>Drawblade</h3> \
                </div> \
                <div class="panel-body text-center"> \
                  <p>2D Platformer built with SDL in C.</p> \
                  <img src="assets/drawblade.png" alt="Drawblade-img"> \
                </div> \
              </div> \
            </a> \
          </div> \
          <div class="col-sm-4 hover item-fade"> \
            <a href="https://github.com/shintoo/PL0" class="hover"> \
              <div class="panel panel-default"> \
                <div class="panel-head text-center"> \
                  <h3> PL/0 Compiler</h3> \
                </div> \
                <div class="panel-body text-center"> \
                  <p> Compiler for the PL/0 language built in C.</p> \
                  <img src="assets/pl0.png" alt="PL0-img"> \
                </div> \
              </div> \
            </a> \
          </div> \
        </div> \
      </div>'
    ;

    var experienceTab = '<div class="container"> \
        <hr class="breaker"> \
        <div class="single holder"> \
          <div class="hover item-fade"> \
            <div class="hover"> \
              <a href="http://lockheedmartin.com/" class="hover"> \
                <div class="panel panel-default"> \
                  <div class="panel-head text-center"> \
                    <h3>Lockheed Martin</h3> \
                    <br> \
                    <h5>Systems Engineer</h5> \
                  </div> \
                  <div class="panel-body text-center"> \
                    <p>Software configuration, unit testing, documentation, hardware compatibility.</p> \
                    <img src="assets/lm.png"  width="255" alt="Lockheed-Martin-img"> \
                  </div> \
                </div> \
              </a> \
            </div> \
          </div> \
        </div> \
      </div>'
    ;

    var educationTab = '<div class="container"> \
        <hr class="breaker"> \
        <div class="single holder"> \
          <div class="hover item-fade"> \
            <div class="hover"> \
              <a href="https://www.ucf.edu/" class="hover"> \
                <div class="panel panel-default"> \
                  <div class="panel-head text-center"> \
                    <h3>University of Central Florida</h3> \
                    <br> \
                    <h5>Computer Science</h5> \
                  </div> \
                  <div class="panel-body text-center"> \
                    <p></p> \
                    <img src="assets/ucf.png"  width="255" alt="ucf-img"> \
                  </div> \
                </div> \
              </a> \
            </div> \
          </div> \
        </div> \
      </div>'


    var tab = projectsTab;

    $scope.currentTab = function () {
      return tab;
    }
    
    $scope.projects = function() {
    	tab = projectsTab;
    }

    $scope.experience = function() {
     	tab = experienceTab;
    }

    $scope.education = function() {
      tab = educationTab;
    }

    $scope.projectsTabActive = function() {
    	return tab == projectsTab ? 'active' : '';
    }

    $scope.experienceTabActive = function() {
    	return tab == experienceTab ? 'active' : '';
    }

    $scope.educationTabActive = function() {
      return tab == educationTab ? 'active' : '';
    }

}