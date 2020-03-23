const genome_list = [
  {
    "id": "hg38",
    "name": "Human (GRCh38/hg38)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg38/hg38.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg38/hg38.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg38/annotations/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg38/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg38/refGene.sorted.txt.gz.tbi",
        "visibilityWindow": -1,
        "removable": false,
        "order": 1000000
      }
    ]
  },
  {
    "id": "hg19",
    "name": "Human (CRCh37/hg19)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/hg19.fasta",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/hg19.fasta.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg19/cytoBand.txt",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg19/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg19/refGene.sorted.txt.gz.tbi",
        "visibilityWindow": -1,
        "removable": false,
        "order": 1000000
      }
    ]
  },
  {
    "id": "hg18",
    "name": "Human (hg18)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg18/hg18.fasta",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg18/hg18.fasta.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg18/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg18/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/hg18/refGene.txt.gz.tbi",
        "visibilityWindow": -1,
        "removable": false,
        "order": 1000000
      }
    ]
  },
  {
    "id": "mm10",
    "name": "Mouse (GRCm38/mm10)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/mm10/mm10.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/mm10/mm10.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/annotations/mm10/cytoBandIdeo.txt.gz",
    "order": 1000000,
    "tracks": [
      {
        "name": "Refseq Genes",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/mm10/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/mm10/refGene.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "visibilityWindow": -1,
        "supportsWholeGenome": false
      }
    ]
  },
  {
    "id": "panTro4",
    "name": " Chimp (SAC 2.1.4/panTro4)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panTro4/panTro4.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panTro4/panTro4.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panTro4/cytoBandIdeo.txt.gz",
    "chromosomeOrder": "chr1,chr2A,chr2B,chr3,chr4,chr5,chr6,chr7,chr8,chr9,chr10,chr11,chr12,chr13,chr14,chr15,chr16,chr17,chr18,chr19,chr20,chr21,chr22,chrX,chrY",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panTro4/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panTro4/refGene.sorted.txt.gz.tbi",
        "removable": false,
        "order": 1000000,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "panPan2",
    "name": "Bonobo (MPI-EVA panpan1.1/panPan2)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panPan2/panPan2.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panPan2/panPan2.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panPan2/cytoBandIdeo.txt.gz",
    "chromosomeOrder": "chr1,chr2A,chr2B,chr3,chr4,chr5,chr6,chr7,chr8,chr9,chr10,chr11,chr12,chr13,chr14,chr15,chr16,chr17,chr18,chr19,chr20,chr21,chr22,chrX",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panPan2/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/panPan2/refGene.sorted.txt.gz.tbi",
        "removable": false,
        "order": 1000000,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "bosTau8",
    "name": "Cow (UMD_3.1.1/bosTau8)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/bosTau8/bosTau8.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/bosTau8/bosTau8.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/bosTau8/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/bosTau8/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/bosTau8/refGene.sorted.txt.gz.tbi",
        "removable": false,
        "order": 1000000,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "ce11",
    "name": "C. elegans (ce11)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/ce11/ce11.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/ce11/ce11.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/ce11/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/ce11/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/ce11/refGene.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "supportsWholeGenome": false,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "canFam3",
    "name": "Dog (Broad CanFam3.1/canFam3)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/canFam3/canFam3.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/canFam3/canFam3.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/canFam3/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/canFam3/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/canFam3/refGene.sorted.txt.gz.tbi",
        "removable": false,
        "order": 1000000,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "dm6",
    "name": "D. melanogaster (dm6)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/dm6/dm6.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/dm6/dm6.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/dm6/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/dm6/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/dm6/refGene.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "supportsWholeGenome": false,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "gorGor4",
    "name": "Gorilla (gorGor4.1/gorGor4)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/gorGor4/gorGor4.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/gorGor4/gorGor4.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/gorGor4/cytoBandIdeo.txt.gz",
    "chromosomeOrder": "chr1,chr2A,chr2B,chr3,chr4,chr5,chr6,chr7,chr8,chr9,chr10,chr11,chr12,chr13,chr14,chr15,chr16,chr17,chr18,chr19,chr20,chr21,chr22,chrX",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/gorGor4/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/gorGor4/refGene.sorted.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "susScr11",
    "name": "Pig (SGSC Sscrofa11.1/susScr11)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/susScr11/susScr11.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/susScr11/susScr11.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/susScr11/cytoBandIdeo.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "format": "refgene",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/susScr11/refGene.sorted.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/susScr11/refGene.sorted.txt.gz.tbi",
        "removable": false,
        "order": 1000000,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "rn6",
    "name": "Rat (RGCS 6.0/rn6)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/rn6/rn6.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/rn6/rn6.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/rn6/cytoBand.txt.gz",
    "order": 1000000,
    "tracks": [
      {
        "name": "Refseq Genes",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/rn6/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/rn6/refGene.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "supportsWholeGenome": false,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "sacCer3",
    "name": "S. cerevisiae (sacCer3)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/sacCer3/sacCer3.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/sacCer3/sacCer3.fa.fai",
    "tracks": [
      {
        "name": "Ensembl Genes",
        "type": "annotation",
        "format": "ensgene",
        "displayMode": "EXPANDED",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/sacCer3/ensGene.txt.gz",
        "indexed": false,
        "supportsWholeGenome": false
      }
    ]
  },
  {
    "id": "danRer11",
    "name": "Zebrafish (GRCZ11/danRer11)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer11/danRer11.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer11/danRer11.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer11/cytoBandIdeo.txt.gz",
    "aliasURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer11/chromAlias.txt.gz",
    "tracks": [
      {
        "name": "Refseq Genes",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer11/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer11/refGene.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "supportsWholeGenome": false,
        "visibilityWindow": -1
      }
    ]
  },
  {
    "id": "danRer10",
    "name": "Zebrafish (GRCZ10/danRer10)",
    "fastaURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/danRer10/danRer10.fa",
    "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.broadinstitute.org/genomes/seq/danRer10/danRer10.fa.fai",
    "cytobandURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer10/cytoBandIdeo.txt.gz",
    "order": 1000000,
    "tracks": [
      {
        "name": "Refseq Genes",
        "url": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer10/refGene.txt.gz",
        "indexURL": "https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/danRer10/refGene.txt.gz.tbi",
        "order": 1000000,
        "removable": false,
        "supportsWholeGenome": false,
        "visibilityWindow": -1
      }
    ]
  }
];

function get_genome_urls(id) {
    let match = null;
    genome_list.forEach(function(g) {
        if (g['id'] === id) {
            match = g;
        }
    });

    return match;
}

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

    if(index !== -1) {
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

    // If using a hosted genome
    if (genome !== null && genome[0] !== "" && genome[0] !== "none") {
        const urls = get_genome_urls(genome[0]);
        igv_options["reference"] = {
            fastaURL: urls['fastaURL'],
            indexURL: urls['indexURL'],
            cytobandURL: urls['cytobandURL']
        };
    }

    // If using a custom genome
    else {
        igv_options["reference"] = {};

        const genome_fasta = requestParams["genome.fasta.file"];
        const genome_index = requestParams["genome.index.file"];
        const genome_cytoband = requestParams["genome.cytoband.file"];

        if (genome_fasta !== undefined && genome_fasta !== null && genome_fasta[0]) {
            igv_options["reference"]["fastaURL"] = decodeURIComponent(genome_fasta[0]);
        }

        if (genome_index !== undefined && genome_index !== null && genome_index[0]) {
            igv_options["reference"]["indexURL"] = decodeURIComponent(genome_index[0]);
        }

        if (genome_cytoband !== undefined && genome_cytoband !== null && genome_cytoband[0]) {
            igv_options["reference"]["cytobandURL"] = decodeURIComponent(genome_cytoband[0]);
        }
    }

    var locus = "locus" in requestParams ? requestParams["locus"].length > 0 ? requestParams["locus"][0] : null : null;
    if (locus !== null && locus !== "") {
        igv_options["locus"] = decodeURIComponent(locus);
    }
    else {
        igv_options["locus"] = '';
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

            if (index) {
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

        if (tracks.length !== 0) {
            igv_options["tracks"] = tracks;
            var div = $("#myDiv")[0];

            console.log(JSON.stringify(igv_options));
            var igvObj = igv.createBrowser(div, igv_options);
        }
    }
});
