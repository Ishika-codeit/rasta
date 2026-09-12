const createActionPlan = (service) => {
    // Extract only the action strings from the steps array
    const stepsArray = Array.isArray(service.steps) ? service.steps : [];

    // Return a simple array of strings as the frontend expects
    return stepsArray.map(step =>
        typeof step === 'object' ? step.action : step
    );
};

module.exports = {
    createActionPlan
};