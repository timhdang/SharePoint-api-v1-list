//Require extra set up, will not work without an experienced SharePoint administrator.

$(document).ready(function() { 
    SPData(); 
     
            });  
            
        function SPData() {
            var rooturl = "https://change-me.sharepoint.com/"       
            var casestudyrooturl = "https://change-me.sharepoint.com/change-me"    
            var method = "GetListItems";                 
               
          var call1 =  $().SPServices
            ({
                operation: method,
                async: false, 
                webURL: "https://change-me.sharepoint.com/change-me",
                listName: "change-me-list-name",
                CAMLQuery: '<Query><OrderBy><FieldRef Name=\'Title\' Ascending=\'False\' /></OrderBy></Query>',
                CAMLQueryOptions: '<QueryOptions><ViewAttributes Scope="Recursive"/></QueryOptions>', 
                CAMLViewFields: "<ViewFields><FieldRef Name='FileLeafRef' /><FieldRef Name='BaseName' /><FieldRef Name='FileDirRef' /><FieldRef Name='Account' /><FieldRef Name='Offering' /><FieldRef Name='Offering0' /><FieldRef Name='Audience1' /><FieldRef Name='ItemTypeTag' /><FieldRef Name='LogicKeywords' /><FieldRef Name='Library' /><FieldRef Name='Industry' /><FieldRef Name='Created' /></ViewFields>",                                                                                                                                                             
                completefunc: function (xData, Status)
                    {
                    console.log("call1 = " ,  xData.responseXML);
                    var row ="";
                    $(xData.responseXML).SPFilterNode("z:row").each(function() {
                        var _ows_Industry = "#";
                        var _ows_FileLeafRef = "#";
                        var _ows_Account = "#";
                        var _ows_ItemTypeTag = "#";
                        var _ows_Offering = "#";
                        var _ows_Audience1 = "#";
                        var _ows_Library = "#";
                        var _ows_FileDirRef = "#";
                        var _ows_Keywords ="#";
                        try { 
                            _ows_FileLeafRef = $(this).attr("ows_BaseName");
                        } catch (e)
                        {
                            console.log("Error at " + "ows_FileLeafRef" )
                        }
                        try { 
                            _ows_Account= $(this).attr("ows_Account") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Account" )
                        }
                        try { 
                            _ows_Industry= $(this).attr("ows_Industry") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Industry" )
                        }
                        try { 
                            _ows_Offering= $(this).attr("ows_Offering") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Offering" )
                        }
                        let meta_data = $(this).attr("ows_MetaInfo") ;
                        if($(this).attr("ows_MetaInfo").indexOf('SW|RFP') > -1)
                            _ows_ItemTypeTag = "RFP"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|Case Study') > -1)
                            _ows_ItemTypeTag = "Case Study"
                        else {
                            _ows_ItemTypeTag = "Case Study"
                        }

                        if($(this).attr("ows_MetaInfo").indexOf('SW|Internal Only') > -1)
                            _ows_Audience1 = "Internal Only"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|Public') > -1)
                            _ows_Audience1 = "Public"
                        else {
                            _ows_Audience1 = "Confidential"
                        }

                        if($(this).attr("ows_FileRef").indexOf('Case Studies') > -1)
                            _ows_Library = "Case Studies"
                        else if($(this).attr("ows_FileRef").indexOf('RFPs') > -1)
                            _ows_Library = "RFPs"
                        else {
                            _ows_Library = "Proposals"
                        }
                        if($(this).attr("ows_MetaInfo").indexOf('SW|change-me') > -1)
                            _ows_Keywords = "change-me"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|change-me') > -1)
                            _ows_Keywords = "change-me"
                        else {
                            _ows_Keywords = "change-me"
                        }
                
                        console.log("_ows_Audience1 = " + _ows_Audience1);
                        _ows_FileDirRef = $(this).attr("ows_FileRef").split('#',1);
                        _ows_FileDirRef = "change-me/change-me-list-name"
                        console.log("ows_FileLeafRef" + _ows_FileLeafRef);
                        console.log("ows_Account" + _ows_Account);
                        console.log("ows_Industry" + _ows_Industry);
                        console.log("_ows_ItemTypeTag" + _ows_ItemTypeTag);
                        console.log("_ows_Offering" + _ows_Offering);
                        console.log("_ows_Audience1" + _ows_Audience1);
                        console.log("_ows_FileDirRef "+ _ows_FileDirRef);
                        console.log("_ows_Keywords = " + _ows_Keywords)
                
                            ($('#table_id1 tbody').append( "<tr><td>" + _ows_FileLeafRef +  "</td><td>" + _ows_Account + "</td><td>" + _ows_ItemTypeTag + "</td><td>" +  _ows_Offering + "</td><td>" + _ows_Audience1 + "</td><td>" + _ows_Industry + "</td><td>" + _ows_Keywords+ "</td><td >"+ _ows_Library + "</td><td >"+ _ows_FileDirRef + "</td></tr>" ));           
                    });
                    }
            });

        var call2 =  $().SPServices
            ({
                operation: method,
                async: false, 
                webURL: "https://change-me.sharepoint.com/change-me",
                listName: "change-me-list-name",
                CAMLQuery: '<Query><OrderBy><FieldRef Name=\'Title\' Ascending=\'False\' /></OrderBy></Query>',
                CAMLQueryOptions: '<QueryOptions><ViewAttributes Scope="Recursive"/></QueryOptions>', 
                CAMLViewFields: "<ViewFields><FieldRef Name='FileLeafRef' /><FieldRef Name='BaseName' /><FieldRef Name='FileDirRef' /><FieldRef Name='Account' /><FieldRef Name='Offering' /><FieldRef Name='Offering0' /><FieldRef Name='Audience1' /><FieldRef Name='ItemTypeTag' /><FieldRef Name='LogicKeywords' /><FieldRef Name='Library' /><FieldRef Name='Industry' /><FieldRef Name='Created' /></ViewFields>",                                                                                                                                                             
                completefunc: function (xData, Status)
                    {
                    console.log("call1 = " ,  xData.responseXML);
                    var row ="";
                    $(xData.responseXML).SPFilterNode("z:row").each(function() {
                        var _ows_Industry = "#";
                        var _ows_FileLeafRef = "#";
                        var _ows_Account = "#";
                        var _ows_ItemTypeTag = "#";
                        var _ows_Offering = "#";
                        var _ows_Audience1 = "#";
                        var _ows_Library = "#";
                        var _ows_FileDirRef = "#";
                        var _ows_Keywords ="#";
                        try { 
                            _ows_FileLeafRef = $(this).attr("ows_BaseName");
                        } catch (e)
                        {
                            console.log("Error at " + "ows_FileLeafRef" )
                        }
                        try { 
                            _ows_Account= $(this).attr("ows_Account") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Account" )
                        }
                        try { 
                            _ows_Industry= $(this).attr("ows_Industry") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Industry" )
                        }
                        try { 
                            _ows_Offering= $(this).attr("ows_Offering") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Offering" )
                        }
                        let meta_data = $(this).attr("ows_MetaInfo") ;
                        if($(this).attr("ows_MetaInfo").indexOf('SW|RFP') > -1)
                            _ows_ItemTypeTag = "RFP"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|Case Study') > -1)
                            _ows_ItemTypeTag = "Case Study"
                        else {
                            _ows_ItemTypeTag = "Case Study"
                        }

                        if($(this).attr("ows_MetaInfo").indexOf('SW|Internal Only') > -1)
                            _ows_Audience1 = "Internal Only"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|Public') > -1)
                            _ows_Audience1 = "Public"
                        else {
                            _ows_Audience1 = "Confidential"
                        }

                        if($(this).attr("ows_FileRef").indexOf('Case Studies') > -1)
                            _ows_Library = "Case Studies"
                        else if($(this).attr("ows_FileRef").indexOf('RFPs') > -1)
                            _ows_Library = "RFPs"
                        else {
                            _ows_Library = "Proposals"
                        }
                        if($(this).attr("ows_MetaInfo").indexOf('SW|change-me') > -1)
                            _ows_Keywords = "change-me"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|change-me') > -1)
                            _ows_Keywords = "change-me"
                        else {
                            _ows_Keywords = "change-me"
                        }
                
                        console.log("_ows_Audience1 = " + _ows_Audience1);
                        _ows_FileDirRef = $(this).attr("ows_FileRef").split('#',1);
                        _ows_FileDirRef = "casestudyrfp/Case Studies"
                        console.log("ows_FileLeafRef" + _ows_FileLeafRef);
                        console.log("ows_Account" + _ows_Account);
                        console.log("ows_Industry" + _ows_Industry);
                        console.log("_ows_ItemTypeTag" + _ows_ItemTypeTag);
                        console.log("_ows_Offering" + _ows_Offering);
                        console.log("_ows_Audience1" + _ows_Audience1);
                        console.log("_ows_FileDirRef "+ _ows_FileDirRef);
                        console.log("_ows_Keywords = " + _ows_Keywords)
                
                            ($('#table_id1 tbody').append( "<tr><td>" + _ows_FileLeafRef +  "</td><td>" + _ows_Account + "</td><td>" + _ows_ItemTypeTag + "</td><td>" +  _ows_Offering + "</td><td>" + _ows_Audience1 + "</td><td>" + _ows_Industry + "</td><td>" + _ows_Keywords+ "</td><td >"+ _ows_Library + "</td><td >"+ _ows_FileDirRef + "</td></tr>" ));           
                    });
                    }
            });
     
      var call2 =  $().SPServices
            ({
                operation: method,
                async: false, 
                webURL: "https://change-me.sharepoint.com/change-me",
                listName: "change-me-list-name",
                CAMLQuery: '<Query><OrderBy><FieldRef Name=\'Title\' Ascending=\'False\' /></OrderBy></Query>',
                CAMLQueryOptions: '<QueryOptions><ViewAttributes Scope="Recursive"/></QueryOptions>', 
                CAMLViewFields: "<ViewFields><FieldRef Name='FileLeafRef' /><FieldRef Name='BaseName' /><FieldRef Name='FileDirRef' /><FieldRef Name='Account' /><FieldRef Name='Offering' /><FieldRef Name='Offering0' /><FieldRef Name='Audience1' /><FieldRef Name='ItemTypeTag' /><FieldRef Name='LogicKeywords' /><FieldRef Name='Library' /><FieldRef Name='Industry' /><FieldRef Name='Created' /></ViewFields>",                                                                                                                                                             
                completefunc: function (xData, Status)
                    {
                    console.log("call1 = " ,  xData.responseXML);
                    var row ="";
                    $(xData.responseXML).SPFilterNode("z:row").each(function() {
                        var _ows_Industry = "#";
                        var _ows_FileLeafRef = "#";
                        var _ows_Account = "#";
                        var _ows_ItemTypeTag = "#";
                        var _ows_Offering = "#";
                        var _ows_Audience1 = "#";
                        var _ows_Library = "#";
                        var _ows_FileDirRef = "#";
                        var _ows_Keywords ="#";
                        try { 
                            _ows_FileLeafRef = $(this).attr("ows_BaseName");
                        } catch (e)
                        {
                            console.log("Error at " + "ows_FileLeafRef" )
                        }
                        try { 
                            _ows_Account= $(this).attr("ows_Account") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Account" )
                        }
                        try { 
                            _ows_Industry= $(this).attr("ows_Industry") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Industry" )
                        }
                        try { 
                            _ows_Offering= $(this).attr("ows_Offering") ;
                        } catch (e)
                        {
                            console.log("Error at " + "ows_Offering" )
                        }
                        let meta_data = $(this).attr("ows_MetaInfo") ;
                        if($(this).attr("ows_MetaInfo").indexOf('SW|RFP') > -1)
                            _ows_ItemTypeTag = "RFP"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|Case Study') > -1)
                            _ows_ItemTypeTag = "Case Study"
                        else {
                            _ows_ItemTypeTag = "Case Study"
                        }

                        if($(this).attr("ows_MetaInfo").indexOf('SW|Internal Only') > -1)
                            _ows_Audience1 = "Internal Only"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|Public') > -1)
                            _ows_Audience1 = "Public"
                        else {
                            _ows_Audience1 = "Confidential"
                        }

                        if($(this).attr("ows_FileRef").indexOf('Case Studies') > -1)
                            _ows_Library = "Case Studies"
                        else if($(this).attr("ows_FileRef").indexOf('RFPs') > -1)
                            _ows_Library = "RFPs"
                        else {
                            _ows_Library = "Proposals"
                        }
                        if($(this).attr("ows_MetaInfo").indexOf('SW|change-me') > -1)
                            _ows_Keywords = "change-me"
                        else if($(this).attr("ows_MetaInfo").indexOf('SW|change-me') > -1)
                            _ows_Keywords = "change-me"
                        else {
                            _ows_Keywords = "change-me"
                        }
                
                        console.log("_ows_Audience1 = " + _ows_Audience1);
                        _ows_FileDirRef = $(this).attr("ows_FileRef").split('#',1);
                        _ows_FileDirRef = "casestudyrfp/Case Studies"
                        console.log("ows_FileLeafRef" + _ows_FileLeafRef);
                        console.log("ows_Account" + _ows_Account);
                        console.log("ows_Industry" + _ows_Industry);
                        console.log("_ows_ItemTypeTag" + _ows_ItemTypeTag);
                        console.log("_ows_Offering" + _ows_Offering);
                        console.log("_ows_Audience1" + _ows_Audience1);
                        console.log("_ows_FileDirRef "+ _ows_FileDirRef);
                        console.log("_ows_Keywords = " + _ows_Keywords)
                
                            ($('#table_id1 tbody').append( "<tr><td>" + _ows_FileLeafRef +  "</td><td>" + _ows_Account + "</td><td>" + _ows_ItemTypeTag + "</td><td>" +  _ows_Offering + "</td><td>" + _ows_Audience1 + "</td><td>" + _ows_Industry + "</td><td>" + _ows_Keywords+ "</td><td >"+ _ows_Library + "</td><td >"+ _ows_FileDirRef + "</td></tr>" ));           
                    });
                    }
            });
      
      var table1 = $('#table_id1').DataTable( {
        "dom": 'Rlfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "iDisplayLength": 50,
		"bLengthChange": false,
		"bAutoWidth": false,
        "paging":  true,
        "oLanguage":  {
			"sSearch":  "Quick Search:  "
		},
        "aoColumns": [  
            {  
                "mData": "FileLeafRef",
                "mRender": function ( data, type, full ) {
                    if (full['FileDirRef'].indexOf('Offerings and Content') > -1)
                    {
                        return '<a href="' +rooturl + '/' + full['FileDirRef'] +'" target = "_blank">'+full['FileLeafRef']+"</a>";    
                    }
                    else {
                        return '<a href="' +rooturl + '/' + full['FileDirRef']+'/'+full['FileLeafRef']+'" target = "_blank">'+full['FileLeafRef']+"</a>";
                    }     
                }  
            }             
            , 
            {  
                "mData": "ows_Account"  
            }, {  
                "mData": "ows_ItemTypeTag"  
            }, {  
                "mData": "Offering"
            }
            , {
                "mData": "Audience1"   
            },
            {  
            "mData": "Industry"
            },
            {
            "mData": "Keywords"
            },
            {
            "mData": "Library",
            "mRender": function ( data, type, full ) {
                //console.log("data  = " , data);
                if (typeof(full['Library']) === 'undefined') {
                    console.log("full['FileDirRef'] = " + full['FileDirRef']);
                    return '<a href="'+casestudyrooturl+ "/" + full['FileDirRef'] +'" target = "_blank">'+full['FileDirRef']+" </a>";
                }       
                else {
                    console.log("full['FileDirRef'] = " + full['FileDirRef']);
                    return '<a href="'+casestudyrooturl+ "/" + full['Library'] +'" target = "_blank">'+full['Library']+" </a>";
                }
            }
            },
            {
               "mData": "FileDirRef",
               "visible": false
            }                                                                                                     
        ],
         
        initComplete: function() {
            this.api().columns([1,2,3,4,5,6,7,8]).every(function() {
                var column = this;
                $(column.header()).append("<br>")
                var select = $('<select><option value=""></option></select>')
                
                .appendTo($(column.header()))
                    .on('change', function() {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                column.data().unique().sort().each(function(d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });
                
            });
            
        }
        
    });
}
