function skillsMember(){
return { 
    restrict: 'E',
    templateUrL: 'modules/skills/ views/member.html ' , 
    controller: 'SkilIsMemberController', 
    controllerAs :'vm' 
    bindToController: true, 
    scope: { 
    member: 'm'
    }
    };
    }