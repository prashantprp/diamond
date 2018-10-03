# -*- coding: utf-8 -*-
"""
Created on Tue Jun 26 11:22:31 2018

@author: prashantpatiyanrajen
"""

import pandas 
import datacompy
print('Hello')
df1=pandas.read_csv('C:\\Users\\prashantpatiyanrajen\\new_1322.csv',sep='|',encoding="ISO-8859-1",low_memory=False)
df2=pandas.read_csv('C:\\Users\\prashantpatiyanrajen\\old_1322.csv',sep='|',encoding="ISO-8859-1",low_memory=False)
compare=datacompy.Compare(df1,df2,join_columns='INTEGRATION_ID')
print(compare.report())

