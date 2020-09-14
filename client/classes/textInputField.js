class TextInputField {
constructor(options) {
        console.log(options)
        this.id = options.id;
        this.html = options.html || undefined
        this.modelProperty = options.modelProperty;
        this.hmtl = options.hmtl;
        this.get = options.get;
        this.set = options.set; 
    }
    get(params) {
        
    }
    
    set(params) {
        
    }

}

export default TextInputField;
