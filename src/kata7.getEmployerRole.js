const getEmployerRole = (employeeName, manUtd) => {

for (let i = 0; i < manUtd.length; i++) 
    if (manUtd[i].name === employeeName) {
        return manUtd[i].position;
    };
    
};

module.exports = getEmployerRole;
