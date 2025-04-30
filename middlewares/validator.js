const joi=require('joi');
exports.signupSchema=joi.object({
    email:joi.string()
    .required()
    .min(9)
    .max(60)
    .email({
        tlds:{allow:['com','net']},

    }),
    password:joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
    
})