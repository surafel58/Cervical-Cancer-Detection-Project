const get_total_test = (patient_records) => {

    let total_test = {};

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

    let total_positive = {};
    let total_negative = {};

    patient_records.forEach(record => {
        
        record.screeningResults.forEach((result) => 
        {
            if (result.resultDescription["Cancer Classification"] == 'Squamous cell carcinoma'){
                
                if(!total_positive[record.age])
                    total_positive[record.age] = 1
                else
                    total_positive[record.age] += 1
            }
            else{

                if(!total_negative[record.age])
                    total_negative[record.age] = 1
                else
                    total_negative[record.age] += 1
            }
        
        })

    });

    total_negative = get_total_test(patient_records) - total_positive;

    return { total_positive, total_negative }
}


const get_age_group = (patient_records) => {

    let age_group = [];
    let positive_age_group = {};
    let negative_age_group = {};
    
    patient_records.forEach((record) => {

        age_group.push(record.age);

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
    });

    return { positive_age_group, negative_age_group };
}

const get_cancer_classification  = (patient_records) => {

    let HSIL = 0, LSIL = 0, SCC = 0, NIM = 0;

    patient_records.forEach((record) => {

        for (let i = 0; i < record.screeningResults.length; i++) {

            const classification = record.screeningResults[i].resultDescription["Cancer Classification"];

            if(classification == 'High squamous intra-epithelial lesion'){
                HSIL += 1
            } 
            else if(classification == 'Low squamous intra-epithelial lesion'){
                LSIL += 1
            }
            else if(classification == 'Squamous cell carcinoma'){
                SCC += 1
            }
            else{
                NIM += 1
            }

        }
    });

    return { HSIL, LSIL, SCC, NIM };
}

const get_cell_conditions = (patient_records) => {

    let normal = 0, precancerous = 0, cancerous = 0;

    patient_records.forEach((record) => {

        for (let i = 0; i < record.screeningResults.length; i++) {

            const condition = record.screeningResults[i].resultDescription['Cells condition'];

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
