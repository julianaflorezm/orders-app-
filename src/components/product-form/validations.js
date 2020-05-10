function validations(values) {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 100) {
      errors.name = "Too long";
    }
  
    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length > 280) {
      errors.description = "Too long";
    }
  
    if (values.basePrice < 0) {
      errors.basePrice = "Values less than zero are not allowed";
    }
  
    if (values.taxRate < 0 || values.taxRate > 1) {
      errors.taxRate =
        "Values less than zero or greater than one are not allowed";
    }
  
    if(!values.productStatus){
      errors.productStatus = "Required";
    }else if(values.productStatus.toUpperCase() !== 'BORRADOR' && values.productStatus.toUpperCase() !== 'PUBLICADO'){
        errors.productStatus = "Only values like Borrador o Publicado are allowed";
    }
  
    if (values.inventoryQuantity < 0) {
      errors.inventoryQuantity = "Values less than zero are not allowed";
    }
    return errors;
  }

  export default validations;