angular.module('GradeMate', [])
	.controller('GradeController', ['$scope', function($scope) {
		$scope.grades = [{points: 0, possible: 100, weight: 0}];
		$scope.addGrade = function() {
			$scope.grades.push({points: 0, possible:100, weight: 0});
		};

		$scope.finalGrade = function() {
			var ret = 0;

			for (var i = 0; i < $scope.grades.length; i++) {
				grade = $scope.grades[i];
				ret = ret + (grade.points / grade.possible) * (grade.weight / 100);
			}

			return ret * 100;
		}

		$scope.remove = function(index) {
			if ($scope.grades.length == 1)
				return;
			$scope.grades.splice(index, 1);
		}
	}]);