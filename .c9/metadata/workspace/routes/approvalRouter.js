{"filter":false,"title":"approvalRouter.js","tooltip":"/routes/approvalRouter.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":113,"column":35},"end":{"row":113,"column":36},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":36},"end":{"row":113,"column":37},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":37},"end":{"row":113,"column":38},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":38},"end":{"row":113,"column":39},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":39},"end":{"row":113,"column":40},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":40},"end":{"row":113,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":41},"end":{"row":113,"column":42},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":42},"end":{"row":113,"column":43},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":110,"column":32},"end":{"row":110,"column":40},"action":"remove","lines":["req.body"]}]}],[{"group":"doc","deltas":[{"start":{"row":111,"column":0},"end":{"row":112,"column":0},"action":"remove","lines":["    debug(\"ID:\" + approval.get(\"doc_num\"));",""]}]}],[{"group":"doc","deltas":[{"start":{"row":111,"column":0},"end":{"row":111,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":111,"column":0},"end":{"row":112,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":2},"end":{"row":107,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":124,"column":3},"end":{"row":124,"column":4},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":0},"end":{"row":108,"column":3},"action":"insert","lines":["// "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":3},"action":"insert","lines":["// "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":3},"action":"insert","lines":["// "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":3},"action":"insert","lines":["// "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":3},"action":"insert","lines":["// "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":3},"action":"insert","lines":["// "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":3},"action":"insert","lines":["// "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":3},"action":"insert","lines":["// "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":3},"action":"insert","lines":["// "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":3},"action":"insert","lines":["// "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":3},"action":"insert","lines":["// "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":3},"action":"insert","lines":["// "]},{"start":{"row":120,"column":0},"end":{"row":120,"column":3},"action":"insert","lines":["// "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":3},"action":"insert","lines":["// "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":3},"action":"insert","lines":["// "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":3},"action":"insert","lines":["// "]},{"start":{"row":124,"column":0},"end":{"row":124,"column":3},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":124,"column":6},"end":{"row":125,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":108,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":0},"end":{"row":124,"column":3},"action":"insert","lines":["router.route('/:_id')",".put(function(req, res) {","\tdebug(\"###############결재 수정:\");","    var approval = new Approval();","    approval.updateApprovalConfirm(req.body).then(function(e){","        debug(\"Complete Update Approval.\");","        res.send({success:true, msg:\"Complete Update Approval.\"})","    }).catch(function(e){","        debug(\"Error Update Approval.\");","        res.status(500);","        res.send({","            success:false,","            message: e.message,","            error:e","        });","    });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":124,"column":3},"end":{"row":125,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":15},"end":{"row":108,"column":16},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":16},"end":{"row":108,"column":17},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":19},"end":{"row":108,"column":20},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":112,"column":43},"end":{"row":112,"column":44},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":112,"column":44},"end":{"row":112,"column":45},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":112,"column":45},"end":{"row":112,"column":46},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":112,"column":46},"end":{"row":112,"column":47},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":112,"column":47},"end":{"row":112,"column":48},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":4},"end":{"row":71,"column":38},"action":"remove","lines":["debug(\"ID:\" + approval.get(\"id\"));"]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":4},"end":{"row":91,"column":38},"action":"remove","lines":["debug(\"ID:\" + approval.get(\"id\"));"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":92,"column":4},"action":"remove","lines":["","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":110,"column":43},"end":{"row":110,"column":44},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":19},"end":{"row":105,"column":24},"action":"remove","lines":["/:_id"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":44},"end":{"row":109,"column":48},"action":"remove","lines":["data"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":43},"end":{"row":109,"column":44},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":122,"column":0},"end":{"row":139,"column":6},"action":"remove","lines":["","// router.route('/:_id')","// .put(function(req, res) {","// \tdebug(\"###############결재 수정:\");","//     var approval = new Approval();","//     approval.updateApprovalConfirm(req.body).then(function(e){","//         debug(\"Complete Update Approval.\");","//         res.send({success:true, msg:\"Complete Update Approval.\"})","//     }).catch(function(e){","//         debug(\"Error Update Approval.\");","//         res.status(500);","//         res.send({","//             success:false,","//             message: e.message,","//             error:e","//         });","//     });","// });"]}]}],[{"group":"doc","deltas":[{"start":{"row":122,"column":0},"end":{"row":123,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":111,"column":65},"end":{"row":111,"column":66},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":67,"column":0},"action":"remove","lines":["//사용자 목록 조회.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":3},"end":{"row":66,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"remove","lines":["//사용자 목록 조회.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["//사용자 목록 조회.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":83,"column":0},"end":{"row":84,"column":0},"action":"remove","lines":["//사용자 등록",""]}]}],[{"group":"doc","deltas":[{"start":{"row":85,"column":0},"end":{"row":86,"column":0},"action":"remove","lines":["    debug(\"사용자 등록:\");",""]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":67,"column":0},"action":"remove","lines":["    debug(\"사용자 등록:\");",""]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":66},"end":{"row":106,"column":0},"action":"insert","lines":["",""]},{"start":{"row":106,"column":0},"end":{"row":106,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":8},"end":{"row":109,"column":12},"action":"insert","lines":["","\t\t\t        if(data.outOffice.state == \"결재완료\"){","\t\t\t            promiseArr.push(_sendOutofficeEmail(data.outOffice.doc_num));","\t\t\t        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":107,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":108,"column":0},"end":{"row":108,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":109,"column":0},"end":{"row":109,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":107,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":108,"column":0},"end":{"row":108,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":109,"column":0},"end":{"row":109,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":107,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":108,"column":0},"end":{"row":108,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":109,"column":0},"end":{"row":109,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":11},"end":{"row":107,"column":15},"action":"remove","lines":["data"]},{"start":{"row":107,"column":11},"end":{"row":107,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":12},"end":{"row":107,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":13},"end":{"row":107,"column":14},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":14},"end":{"row":107,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":15},"end":{"row":107,"column":16},"action":"insert","lines":["v"]},{"start":{"row":107,"column":16},"end":{"row":107,"column":17},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":17},"end":{"row":107,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":17},"end":{"row":107,"column":18},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":16},"end":{"row":107,"column":17},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":15},"end":{"row":107,"column":16},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":15},"end":{"row":107,"column":16},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":16},"end":{"row":107,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":17},"end":{"row":107,"column":18},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":18},"end":{"row":107,"column":19},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":12},"end":{"row":108,"column":28},"action":"remove","lines":["promiseArr.push("]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":55},"end":{"row":108,"column":57},"action":"remove","lines":[");"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":12},"end":{"row":108,"column":13},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":13},"end":{"row":108,"column":14},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":14},"end":{"row":108,"column":15},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":15},"end":{"row":108,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":16},"end":{"row":108,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":19},"end":{"row":108,"column":20},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":20},"end":{"row":108,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":41},"end":{"row":108,"column":45},"action":"remove","lines":["data"]},{"start":{"row":108,"column":41},"end":{"row":108,"column":49},"action":"insert","lines":["req.body"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":68},"end":{"row":108,"column":69},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":47},"end":{"row":108,"column":0},"action":"insert","lines":["",""]},{"start":{"row":108,"column":0},"end":{"row":108,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":12},"end":{"row":108,"column":13},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":13},"end":{"row":108,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":14},"end":{"row":108,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":15},"end":{"row":108,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":16},"end":{"row":108,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":19},"end":{"row":108,"column":20},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":20},"end":{"row":108,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":21},"end":{"row":108,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":22},"end":{"row":108,"column":23},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":23},"end":{"row":108,"column":25},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":25},"end":{"row":108,"column":26},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":21},"end":{"row":109,"column":40},"action":"remove","lines":["_sendOutofficeEmail"]},{"start":{"row":109,"column":21},"end":{"row":109,"column":39},"action":"insert","lines":["sendOutofficeEmail"]}]}],[{"group":"doc","deltas":[{"start":{"row":110,"column":9},"end":{"row":111,"column":0},"action":"insert","lines":["",""]},{"start":{"row":111,"column":0},"end":{"row":111,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["    debug(req.query);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"remove","lines":["    debug(req.query);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":0},"end":{"row":100,"column":0},"action":"remove","lines":["\tdebug(\"###############결재 수정:\");",""]}]}]]},"ace":{"folds":[],"scrolltop":1266,"scrollleft":0,"selection":{"start":{"row":104,"column":47},"end":{"row":104,"column":47},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1428635691512,"hash":"cba61e1d4ea960fe25c4c7566e85d5c3d7f20053"}