function parseQueryString() {
    var query = (window.location.search || '?').substr(1),
        map   = {};
    query.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function(match, key, value) {
        (map[key] = map[key] || []).push(value);
    });
    return map;
}

function getFilename(file) {
    var fileName = file;
    var index = fileName.lastIndexOf("/");

    if(index != -1)
    {
        return fileName.substring(index + 1);
    }

    return fileName;
}

function getFileExtension(file) {
    return file.replace(/^.*?\.([a-zA-Z0-9]+)$/, "$1");
}

function is_bed(name) {
    return name.endsWith(".bed") || name.endsWith(".bed.gz");
}

$(function() {
    var tracks = [];
    var igv_options = {
        showNavigation: true,
        showRuler: true
    };
    var requestParams = parseQueryString();

    var index = requestParams["index.file"];

    var genome = requestParams["genome"];
    if (genome === null) {
        genome = "hg19";
    }
    else {
        igv_options["reference"] = {
            id: genome[0]
        };
        igv_options["genome"] = genome[0];
    }

    var locus = requestParams["locus"][0];
    if (locus !== null && locus !== "") {
        igv_options["locus"] = decodeURIComponent(locus);
    }

    var inputFiles = requestParams["input.file"];
    if(inputFiles === null) {
        alert("No input files found");
    }
    else {
        inputFiles.forEach(function(url) {
            var name = getFilename(decodeURIComponent(url));

            var track = {
                url: decodeURIComponent(url),
                name: name
            };

            if (is_bed(name)) {
                track["format"] = "bed";
                track["type"] = "annotation";
                track["sourceType"] = "file";
                track["displayMode"] = "EXPANDED";
                track["order"] = Number.MAX_VALUE;
                track["visibilityWindow"] = 300000000;
            }

            if (is_bed(name) && index) {
                track["indexURL"] = decodeURIComponent(index);
            }

            tracks.push(track);
        });

        igv_options["tracks"] = tracks;



        //var inputFiles = inputFiles.sort();
        //for (var t = 0; t < inputFiles.length; t++) {
        //    var lastIndex = inputFiles[t].lastIndexOf('/');
        //    if (lastIndex != -1) {
        //        if (t < tracks.length) {
        //            var inputFilesTrack = tracks[t];
        //            inputFilesTrack["url"] = inputFiles[t];
        //        }
        //        else {
        //            var fileName = inputFiles[t].substring(lastIndex + 1);
        //            tracks.push({
        //                url: inputFiles[t],
        //                name: fileName
        //            });
        //        }
        //    }
        //}
        //
        //var paramNames = Object.keys(requestParams);
        //for (var i = 0; i < paramNames.length; i++) {
        //    var value = requestParams[paramNames[i]];
        //    if (paramNames[i] == "index.file") {
        //        var indexFiles = value.sort();
        //        for (var idx = 0; idx < indexFiles.length; idx++) {
        //            var indexFound = false;
        //            var indexFileExtension = getFileExtension(indexFiles[idx]);
        //            if (indexFileExtension != null && indexFileExtension != "") {
        //                for (var fileIndex = 0; fileIndex < inputFiles.length; fileIndex++) {
        //                    var expectedFile = getFilename(inputFiles[fileIndex]) + "." + indexFileExtension;
        //                    var actualFile  = getFilename(indexFiles[idx]);
        //
        //                    if (expectedFile === actualFile) {
        //
        //                        var indexTrack = tracks[fileIndex];
        //                        indexTrack["indexURL"] = indexFiles[idx];
        //                        indexFound = true;
        //
        //                        console.log("Index found for: " + inputFiles[fileIndex]);
        //                    }
        //                }
        //            }
        //
        //        }
        //    }
        //    else {
        //        if (paramNames[i] != "input.file" && paramNames[i] != "task" && paramNames[i] != "file"
        //            && value != undefined && value != null
        //            && value.length == 1 && value[0].length > 0) {
        //            igv_options[paramNames[i]] = value[0];
        //        }
        //    }
        //}

        if (tracks.length != 0) {
            igv_options["tracks"] = tracks;
            var div = $("#myDiv")[0];

            console.log(JSON.stringify(igv_options));
            var igvObj = igv.createBrowser(div, igv_options);
        }
    }
});