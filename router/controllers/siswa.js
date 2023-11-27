const Siswa = require('../../models/siswa');

module.exports = {
  //get all
  index: async (req, res) => {
    try {
      const siswa = await Siswa.find();
      if (siswa.length > 0) {
        res.status(200).json({
          status: true,
          data: siswa,
          method: req.method,
          url: req.url
        });
      } else {
        res.status(404).json({ success: false, message: 'Tidak ada data' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Terjadi kesalahan' });
    }
  },
  //get
  show: async (req, res) => {
    try {
      const siswa = await Siswa.findById(req.params.id)
      res.json({
        status: true,
        data: siswa,
        method: req.method,  
        url: req.url,
        message: "Data berhasil di dapat"
      })
    } catch (error) {
      res.status(400).json({success : false})
      
    }
  
  },
  //create
  store: async (req, res) => {
   try {
    const siswa = await Siswa.create(req.body)
    res.status(200).json({
      status : true,
      data : siswa,
      method : req.method,
      url : req.url,
      message : "Data berhasil ditambahkan"
    })
   } catch (error) {
    res.status(400).json({success : error})
    
   }
  },
  //update
  update: async (req, res) => {
    try {
      const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
      res.json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
      })
    } catch (error) {
      res.status(400).json({success: error})
    }
  
  },
  //delete
  delete: async (req, res) => {
    try {
      await Siswa.findByIdAndDelete(req.params.id)
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      })
    } catch (error) {
      res.status(400).json({success: false})
    }
  },
};
