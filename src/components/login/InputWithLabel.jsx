import React from 'react';

const InputWithLabel = ({label, children,...rest}) => (
    <div className="form-group">
        <label htmlFor={label}>
        <div className="lable"><span>{children}</span></div>
        <input {...rest}/>
        </label>
    </div>
);

export default InputWithLabel;