const get_total_test = (patient_records) => {

    let total_test = {0 : 0};

    patient_records.forEach(record => {

        timestamp = record.createdAt;
        
        // Convert Firestore timestamp to Date object
        const date = new Date(timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000).toDateString().split(' ');
        
        if(!total_test[date[date.length - 1]]){
            total_test[date[date.length - 1]] = 1
        }
        else{
            total_test[date[date.length - 1]] += 1
        }
    });

    return total_test
}

const get_test_group = (patient_records) => {

    let total_positive = 0;
    let total_negative = 0;

    patient_records.forEach(record => {
        
        if(record.screeningResults){
            record.screeningResults.forEach((result) => 
            {
                if (result.resultDescription["Cancer Classification"] == 'Squamous cell carcinoma'){
                    total_positive += 1
                }
                else{
                    total_negative += 1
                }
            
            })
        }

    });

    return { total_positive, total_negative }
}


const get_age_group = (patient_records) => {

    let positive_age_group = { 0 : 0 };
    let negative_age_group = { 0 : 0 };
    
    patient_records.forEach((record) => {

        if(record.screeningResults){
            
        for (let i = 0; i < record.screeningResults.length; i++) {
            
            // find age group having positive cases
            if(record.screeningResults[i].resultDescription["Cancer Classification"] == 'Squamous cell carcinoma'){
                if(!positive_age_group[record.age]){
                    positive_age_group[record.age] = 1
                }
                else{
                    positive_age_group[record.age] += 1
                }
            }
            else{
                if(!negative_age_group[record.age]){
                    negative_age_group[record.age] = 1
                }
                else{
                    negative_age_group[record.age] += 1
                }
            }
        }
        }
    });

    return { positive_age_group, negative_age_group };
}

const get_cancer_classification  = (patient_records) => {

    let HSIL = 0, LSIL = 0, SCC = 0, NIM = 0;

    patient_records.forEach((record) => {

            if(record.screeningResults){

                for (let i = 0; i < record.screeningResults.length; i++) {
    
                const classification = record.screeningResults[i].resultDescription["Cancer Classification"];
    
                if(classification.toLowerCase() == 'high squamous intra-epithelial lesion'){
                    HSIL += 1
                } 
                else if(classification.toLowerCase() == 'low squamous intra-epithelial lesion'){
                    LSIL += 1
                }
                else if(classification.toLowerCase() == 'squamous cell carcinoma'){
                    SCC += 1
                }
                else{
                    NIM += 1
                }
    
                }
            }
            
        });

    return { HSIL, LSIL, SCC, NIM };
}

const get_cell_conditions = (patient_records) => {

    let normal = 0, precancerous = 0, cancerous = 0;

    console.log("get cel condiont", patient_records.screeningResults)

            patient_records.forEach((record) => {
                
                if(record.screeningResults){
                
                    for (let i = 0; i < record.screeningResults.length; i++) {
        
                    const condition = record.screeningResults[i].resultDescription['Cells Condition'];

                    console.log(condition)
        
                    if(condition == 'Normal'){
                        normal += 1
                    } 
                    else if(condition == 'Pre-cancerous'){
                        precancerous += 1
                    }
                    else{
                        cancerous += 1
                    }
        
                    }
                }
            });
        

    return {  normal, precancerous, cancerous };
}

module.exports = {
    get_total_test,
    get_test_group,
    get_age_group,
    get_cancer_classification,
    get_cell_conditions
}
