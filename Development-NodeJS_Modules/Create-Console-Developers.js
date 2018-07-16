(function(){
	var f0 = SUtilCommon.create_Console;
	var a = [
		  "HykLog"	, "김현요"
		, "RayLog"	, "박종하"
		, "cparkLog", "박천수"
		, "Rh2Log"	, "유선아"
		, "HykLog"	, "김현요"
		, "RayLog"	, "박종하"
		, "cparkLog", "박천수"
		, "Rh2Log"	, "유선아"
		//, "JaceLog"	, "임선용"//로그 인스턴스 명명 수정 하기;
		, "JaceLog"	, "이재현"
		, "JkLog"	, "이재경-퇴사"
		, "JamesLog", "이호영-퇴사"
		, "BenLog"	, "정병의-퇴사"
		, "KaiLog"	, "정재명"
		, "CSJLog"	, "최석준"
		, "AlexLog"	, "한영후-퇴사"
		, "TtwLog"	, "송선우"
	];

	var i0;var i1;var i=0, iLen=a.length/2;for( ; i<iLen; ++i ){ io0 = i * 2; io1 = i * 2 + 1; global[ a[ io0 ] ] = f0( a[ io1 ] ); }
})();