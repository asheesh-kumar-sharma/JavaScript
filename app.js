function getDetails(name){
    
    switch(name){
        case "asheesh":
            return "full access";
            break;
        case  "amit":
            return "half access";
            break;
            default:
                return "trial ";
                break;

    }

}


console.log(getDetails("asheesh"));