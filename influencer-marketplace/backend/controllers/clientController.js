exports.listClients = (req, res) => {
    // Logic to fetch clients from the database
    res.status(200).json([{ id: 1, name: 'Client1' }]);
  };
  
  exports.addClient = (req, res) => {
    const { name, company } = req.body;
    if (!name || !company) {
      return res.status(400).json({ message: 'Name and company are required' });
    }
    // Logic to add client to the database
    res.status(201).json({ message: 'Client added successfully' });
  };
  