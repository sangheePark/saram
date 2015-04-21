{"filter":false,"title":"CommuteListView.js","tooltip":"/public/js/views/cm/CommuteListView.js","undoManager":{"mark":76,"position":76,"stack":[[{"group":"doc","deltas":[{"start":{"row":24,"column":48},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":8},"end":{"row":25,"column":47},"action":"insert","lines":["'text!templates/default/rowcombo.html',"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":126},"end":{"row":36,"column":139},"action":"insert","lines":["RowComboHTML,"]}]}],[{"group":"doc","deltas":[{"start":{"row":310,"column":11},"end":{"row":311,"column":0},"action":"insert","lines":["",""]},{"start":{"row":311,"column":0},"end":{"row":311,"column":9},"action":"insert","lines":["\t        "]}]}],[{"group":"doc","deltas":[{"start":{"row":311,"column":9},"end":{"row":317,"column":11},"action":"insert","lines":["var _combo = $(_.template(RowComboHTML)({","    \t            obj : {","    \t                id : \"rdCombo\",","    \t                label : \"부서\"","    \t            }","    \t        })","\t        );"]}]}],[{"group":"doc","deltas":[{"start":{"row":327,"column":34},"end":{"row":328,"column":0},"action":"insert","lines":["",""]},{"start":{"row":328,"column":0},"end":{"row":328,"column":9},"action":"insert","lines":["    \t    "]}]}],[{"group":"doc","deltas":[{"start":{"row":320,"column":39},"end":{"row":321,"column":0},"action":"insert","lines":["",""]},{"start":{"row":321,"column":0},"end":{"row":321,"column":9},"action":"insert","lines":["    \t    "]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":9},"end":{"row":321,"column":10},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":10},"end":{"row":321,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":11},"end":{"row":321,"column":12},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":12},"end":{"row":321,"column":13},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":13},"end":{"row":321,"column":14},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":14},"end":{"row":321,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":15},"end":{"row":321,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":16},"end":{"row":321,"column":17},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":17},"end":{"row":321,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":18},"end":{"row":321,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":19},"end":{"row":321,"column":20},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":20},"end":{"row":321,"column":22},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":21},"end":{"row":321,"column":22},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":22},"end":{"row":321,"column":23},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":23},"end":{"row":321,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":24},"end":{"row":321,"column":25},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":25},"end":{"row":321,"column":26},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":26},"end":{"row":321,"column":27},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":321,"column":28},"end":{"row":321,"column":29},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":350,"column":12},"end":{"row":351,"column":0},"action":"insert","lines":["",""]},{"start":{"row":351,"column":0},"end":{"row":351,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":351,"column":12},"end":{"row":356,"column":80},"action":"insert","lines":["var dept = Code.getCodes(Code.DEPARTMENT);","            $(this.el).find(\"#rdCombo\").append(\"<option>\"+\"전체\"+\"</option>\");","     \t    for(var i=0; i < dept.length; i++){","     \t        $(this.el).find(\"#rdCombo\").append(\"<option>\"+dept[i].name+\"</option>\");","     \t    }","     \t    $(this.el).find(\"#rdCombo\").val(SessionModel.getUserInfo().dept_name);"]}]}],[{"group":"doc","deltas":[{"start":{"row":446,"column":97},"end":{"row":447,"column":0},"action":"insert","lines":["",""]},{"start":{"row":447,"column":0},"end":{"row":447,"column":11},"action":"insert","lines":["     \t\t    "]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":11},"end":{"row":447,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":12},"end":{"row":447,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":13},"end":{"row":447,"column":14},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":14},"end":{"row":447,"column":15},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":15},"end":{"row":447,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":16},"end":{"row":447,"column":17},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":17},"end":{"row":447,"column":18},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":18},"end":{"row":447,"column":19},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":19},"end":{"row":447,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":20},"end":{"row":447,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":21},"end":{"row":447,"column":22},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":22},"end":{"row":447,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":23},"end":{"row":447,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":24},"end":{"row":447,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":25},"end":{"row":447,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":26},"end":{"row":447,"column":27},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":27},"end":{"row":447,"column":28},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":27},"end":{"row":447,"column":28},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":28},"end":{"row":447,"column":29},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":28},"end":{"row":447,"column":29},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":28},"end":{"row":447,"column":29},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":29},"end":{"row":447,"column":30},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":30},"end":{"row":447,"column":31},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":31},"end":{"row":447,"column":32},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":32},"end":{"row":447,"column":33},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":33},"end":{"row":447,"column":35},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":34},"end":{"row":447,"column":35},"action":"insert","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":34},"end":{"row":447,"column":35},"action":"remove","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":34},"end":{"row":447,"column":36},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":35},"end":{"row":447,"column":36},"action":"insert","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":36},"end":{"row":447,"column":37},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":37},"end":{"row":447,"column":38},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":38},"end":{"row":447,"column":39},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":39},"end":{"row":447,"column":40},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":40},"end":{"row":447,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":41},"end":{"row":447,"column":42},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":42},"end":{"row":447,"column":43},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":43},"end":{"row":447,"column":44},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":46},"end":{"row":447,"column":47},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":47},"end":{"row":447,"column":48},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":48},"end":{"row":447,"column":49},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":49},"end":{"row":447,"column":50},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":447,"column":50},"end":{"row":447,"column":52},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":446,"column":97},"end":{"row":446,"column":98},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":354,"column":32},"end":{"row":354,"column":39},"action":"remove","lines":["rdCombo"]},{"start":{"row":354,"column":32},"end":{"row":354,"column":40},"action":"insert","lines":["ccmCombo"]}]}],[{"group":"doc","deltas":[{"start":{"row":356,"column":28},"end":{"row":356,"column":35},"action":"remove","lines":["rdCombo"]},{"start":{"row":356,"column":28},"end":{"row":356,"column":36},"action":"insert","lines":["ccmCombo"]}]}],[{"group":"doc","deltas":[{"start":{"row":352,"column":30},"end":{"row":352,"column":37},"action":"remove","lines":["rdCombo"]},{"start":{"row":352,"column":30},"end":{"row":352,"column":38},"action":"insert","lines":["ccmCombo"]}]}],[{"group":"doc","deltas":[{"start":{"row":313,"column":27},"end":{"row":313,"column":34},"action":"remove","lines":["rdCombo"]},{"start":{"row":313,"column":27},"end":{"row":313,"column":35},"action":"insert","lines":["ccmCombo"]}]}]]},"ace":{"folds":[],"scrolltop":4744,"scrollleft":0,"selection":{"start":{"row":372,"column":9},"end":{"row":372,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":337,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1429515906304,"hash":"f815d9bfe5196e216d0fb365d88047562d0c24cc"}