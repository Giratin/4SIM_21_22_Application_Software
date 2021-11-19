let events = [];

const incrementId = () => {
    let id = 1;
    if (events.length > 0) {
        id = events[events.length - 1].id + 1;
    }
    return id;
}


module.exports = {
    listEvents: (req, res) => {
        res.render("list", { events })
    },
    showFormEvent: (req, res) => {
        res.render("create");
    },
    addEvents: (req, res) => {
        const { title, startDate, endDate } = req.body;
        events.push({ id: incrementId(), title, startDate, endDate });
        res.redirect("/event");
    },
    deleteEvents: (req, res) => {
        const { id } = req.params;

        const indice = events.findIndex((el) => el.id == id);
        events = events.splice(indice, 1);

        events = events.filter((el) => {
            return el.id != id;
        });
        res.redirect("/event");
    },
}