total_bill = float(input("What is the total bill?\n"))

service = input("How was your service?\n")
if  service == "very good":
    tip = total_bill *.3
    
 
elif service == "fair":
    tip = total_bill *.2
        

elif service == "bad":    
    tip = total_bill *.1
  

else: 
    service == "lame"
    tip = total_bill *.0
    

print("Your tip is %.2f" %tip)







