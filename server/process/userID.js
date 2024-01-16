const userId = require("../schema/userId");
exports.CreateId = async (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    const val = await userId.create({ id: data.id, password: data.pass });
    if (val) {
      res.send({ msg: "inserted" });
    } else {
      res.status(400).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.getData = async (req, res) => {
  try {
    const val = await userId.find();
    if (val) {
      res.send({ msg: val });
    } else {
      res.status(400).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.getDataById = async (req, res) => {
  try {
    const { data } = req.body;

    const val = await userId.findOne({ id: data.id });

    if (val) {
      res.send({ msg: val });
    } else {
      res.status(400).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.checkuser = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  try {
    const val = await userId.findOne({ id: data.name, password: data.pass });
    console.log(val);
    if (val) {
      return res.status(200).send({ msg: "exist" });
    } else {
      return res.status(200).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ msg: "siva" });
};

exports.updateId = async (req, res) => {
  const { data } = req.body;
  console.log(data.id);
  try {
    const val = await userId.findOneAndUpdate(
      {
        id: data.id,
      },
      { name: data.name, image: data.image, action: false }
    );
    // console.log(val);
    if (val) {
      return res.status(200).send({ msg: "updated" });
    } else {
      return res.status(200).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ msg: "siva" });
};

exports.deleteId = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  try {
    const val = await userId.findOneAndDelete({
      id: data.id,
    });
    // console.log(val);
    if (val) {
      return res.status(200).send({ msg: "deleted" });
    } else {
      return res.status(200).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ msg: "siva" });
};

exports.acceptId = async (req, res) => {
  const { data } = req.body;

  try {
    const val = await userId.findOneAndUpdate(
      {
        id: data.id,
      },
      { action: true }
    );
    // console.log(val);
    if (val) {
      return res.status(200).send({ msg: "deleted" });
    } else {
      return res.status(200).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ msg: "siva" });
};
exports.resetId = async (req, res) => {
  const { data } = req.body;

  try {
    const val = await userId.findOneAndUpdate(
      {
        id: data.id,
      },
      { name: "-", image: "../image/download.png", action: true }
    );
    // console.log(val);
    if (val) {
      return res.status(200).send({ msg: "deleted" });
    } else {
      return res.status(200).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ msg: "siva" });
};
