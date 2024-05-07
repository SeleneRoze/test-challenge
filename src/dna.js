const validator = {
    isValidDNA(dnaString) {
        if (!dnaString || typeof dnaString !== 'string') {
            return ""; 
        }

       
        const regex = /^[CTAG]+$/;

        
        if (regex.test(dnaString)) {
            return true; 
        } else {
            return false; 
        }
    }
};

module.exports = {validator};
