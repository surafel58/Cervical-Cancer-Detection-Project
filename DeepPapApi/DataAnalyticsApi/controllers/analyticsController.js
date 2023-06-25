const { get_all }  = require("../utils/dbUtils")
const 
{
    get_total_test,
    get_test_group,
    get_age_group,
    get_cell_conditions,
    get_cancer_classification

}  = require('../utils/analysisUtils');

// Get all data and perform analysis
const get_analysis = async (req, res, next) => {

    try {

        let patient_records = await get_all();
        patient_records = patient_records.filter((record) => record.hasOwnProperty("screeningResults"));

        const total_test = get_total_test(patient_records);
        const test_group = get_test_group(patient_records);
        const age_group = get_age_group(patient_records);
        const cell_condition = get_cell_conditions(patient_records);
        const cancer_classification = get_cancer_classification(patient_records);

        res.status(200).json(
        {
            total_test, 
            test_group,
            age_group,
            cell_condition,
            cancer_classification
        });
        
    } catch (error) {
        next(error)
    }
}


module.exports = { get_analysis }