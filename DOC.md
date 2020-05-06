# igv.js

> Launches the igv.js visualizer with the provided files and parameters.

* **Authors:** Thorin Tabor, Jim Robinson (UCSD), Barbara Hill, Marc-Danie Nazaire, Peter Carr (Broad Institute)
* **Contact:** https://groups.google.com/forum/#!forum/genepattern-help

This module launches igv.js on a specified data files. For full documentation and more information about igv.js, please visit 
the [igv.js repository](https://github.com/igvteam/igv.js#igvjs). This does not run the desktop (Java) version of IGV.

v2.3 of this module runs [igv.js v2.3.5](https://github.com/igvteam/igv.js/releases/tag/v2.3.5)

## References

Helga Thorvaldsdóttir, James T. Robinson, Jill P. Mesirov. Integrative Genomics Viewer (IGV): high-performance genomics data visualization and exploration.  [Briefings in Bioinformatics 2012.](http://bib.oxfordjournals.org/cgi/content/full/bbs017?%20ijkey=qTgjFwbRBAzRZWC&keytype=ref)

James T. Robinson, Helga Thorvaldsdóttir, Wendy Winckler, Mitchell Guttman, Eric S. Lander, Gad Getz, Jill P. Mesirov. Integrative Genomics Viewer. [Nature Biotechnology 29, 24–26 (2011).](http://www.nature.com/nbt/journal/v29/n1/abs/nbt.1754.html)

## Parameters
\* - required

**input file\*** 
> Track dataset to be viewed in igv.js

**index file** 
> The index file (i.e .bai, .idx, or .tbi).

**genome\*** 
> Choose the genome for your data.

**genome fasta file** 
> Fasta file to use for a reference genome. Only necessary if genome is not provided above.

**genome index file** 
> Index file to use for a reference genome. Only necessary if genome is not provided above.

**genome cytoband file** 
> Index file to use for a reference genome. Only necessary if genome is not provided above.

**locus** 
> Provide a locus or gene of interest for your data. If left blank igv.js will launch on all.
