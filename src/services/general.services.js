/**
 * @typedef { import('sequelize').Model } Model
 * 
 * @param { Model } Model
 * @param { { data: string }  } condition
 * @param { { all: boolean } } options - Set true to find all the coincidences
 * @returns { Promise<Model> | Promise<Model[]> | Promise<{ error: any }> | Promise<null> } 
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

/**
 * @typedef { import('sequelize').Model } Model
 * 
 * @param { Model } Model 
 * @param { { data: string } } condition 
 * @returns { Promise<number> | Promise<{ error: any }> }
 */
export const deleteBy = async (Model, condition) => {
    try {
        const result = await Model.destroy({ where: condition })
        return result
    } catch (error) {
        return { error }
    }
}