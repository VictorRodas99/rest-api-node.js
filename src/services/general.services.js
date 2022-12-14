/**
 * @typedef { Object } Model
 * 
 * @param { Model } Model
 * @param { { data: string }  } condition
 * @param { { all: boolean } } options - Set true to find all the coincidences
 * @returns { Promise<ResultModel> | Promise<any> | Promise<null> } 
 */
export const findBy = async (Model, condition, options = { all: false }) => {
    try {
        let result

        if(options.all) {
            result = await Model.findAll({ where: condition })
        } else {
            result = await Model.findOne({ where: condition })
        }

        return result

    } catch (error) {
        return { error }
    }
}