const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(`/chat`, function (req, res, next) {
  const { message, sender, character, radius, location } = req.query;

  const content = `${character} ${radius}s: ${message}`;

  axios.post(
    "https://discord.com/api/webhooks/1152784241025876041/2bQd0HH2oVE6BzmGHT8UCu4jpGH_iwPdgtNC-z1t3hdC6jCA_yqNfIVqPF3dw54cTPf7",
    {
      content: content,
    }
  );

  res.json({
    ManifestFileVersion: "000000000000",
    bIsFileData: false,
    AppID: "000000000000",
    AppNameString: "",
    BuildVersionString: "",
    LaunchExeString: "",
    LaunchCommand: "",
    PrereqIds: [],
    PrereqName: "",
    PrereqPath: "",
    PrereqArgs: "",
    FileManifestList: [],
    ChunkHashList: {},
    ChunkShaList: {},
    DataGroupList: {},
    ChunkFilesizeList: {},
    CustomFields: {},
  });
});

router.get(`/log`, function (req, res, next) {
  const {date, steamId, charName, actName, eventId, eventCategory, eventType, params } = req.query;

  const content = `${eventCategory} log: ${charName} triggered ${eventId}: ${params}`;

  axios.post(
    "https://discord.com/api/webhooks/1152782376724865174/wLi3G5lpv4S5hVdBWw0MxDdZStKVX5qb4ozxKTugLfXqRsZkv1_eP_x_3H-srbA68Mfw",
    {
      content: content,
    }
  );

  res.json({
    ManifestFileVersion: "000000000000",
    bIsFileData: false,
    AppID: "000000000000",
    AppNameString: "",
    BuildVersionString: "",
    LaunchExeString: "",
    LaunchCommand: "",
    PrereqIds: [],
    PrereqName: "",
    PrereqPath: "",
    PrereqArgs: "",
    FileManifestList: [],
    ChunkHashList: {},
    ChunkShaList: {},
    DataGroupList: {},
    ChunkFilesizeList: {},
    CustomFields: {},
  });
});

module.exports = router;
