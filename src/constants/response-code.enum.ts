
enum ResponseCode{
        //Http Status 200
        SUCCESS = "SU", //인터페이스에서는 public static final 를 안쳐도 public static final로 인식 
    
        //Http Status 400
        VALIDATION_FAILED="VF",
        DUPLICATE_EMAIL= "DE",
        DUPLICATE_NICKNAME ="DN",
        DUPLICATE_TEL_NUMBER="DT",
        NOT_EXISTED_USER ="NU",
        NOT_EXISTED_BOARD ="NB",
    
    
        //Http Status 401
        SIGN_IN_FAIL="SF",
        AUTHORIZE_FAIL="AF",
    
        //Http Status 403
        NO_PERMISSION="NP",
    
        
        //Http Status 500
        DATABASE_ERROR="DBE",
    }
    

}

export default ResponseCode;
