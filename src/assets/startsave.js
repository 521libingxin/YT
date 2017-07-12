(function(w,l){
    var fin = {"haha":function(obj){
        var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
        var tmpWB = {
            SheetNames: ['mySheet'], //保存的表标题
            Sheets: {
                'mySheet':obj
            }
        };
        var wbout = XLSX.write(tmpWB,wopts);
        
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "test.xlsx");
    }}
    w[l] = fin;
})(this,'startsave');
