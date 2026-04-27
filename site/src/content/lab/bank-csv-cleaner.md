---
title: "Bank CSV Cleaner for AI Processing"
description: "Cleaning and restructuring raw bank CSV exports into a format suitable for AI analysis."
date: 2026-04-26
status: "active"
tags: ["Python", "Data", "Automation", "AI"]
---
## Context

Bank CSV exports are not structured in a way that is easy to work with, especially when trying to use them as input for analysis or AI tools.

The raw export from Swedbank includes extra metadata, encoding issues, and unnecessary columns that make it difficult to process.

## Problem

The original CSV format contains:

- mixed metadata and transaction data
- unclear column structure
- encoding issues (special characters)
- more information than needed for simple analysis

Example (raw):

* Transaktioner Period ...
Radnummer,Clearingnummer,Kontonummer,Produkt,...

## Approach

I created a Python script that:

- removes unnecessary columns
- normalizes encoding (fixes characters)
- restructures the data into a clean format
- extracts only relevant fields

The output format is simplified and consistent.

## Result

Clean CSV:

Radnummer,Datum,Produkt,Beskrivning,Belopp  
1,2026-04-19,Privatkonto,Överföring via internet,2000.00  
2,2026-04-18,Privatkonto,ICA SUPERMARKET,-194.14  

This format is:

- easier to read
- easier to process programmatically
- suitable for AI input and further analysis

## Reflection

This was a small but useful step in understanding:

- data cleaning
- structuring data for downstream usage
- how small automation scripts can remove repetitive friction

It also connects to a broader idea of building simple pipelines for personal data analysis.