# Variable assignment
x <- 10
y <- 10
sum <- x+y
print(paste("Sum:", sum))
print(typeof(sum))

# String Variable
name = "Ashmit Singh"
print(paste(name, "is of data type", typeof(name)))

# Input and condition
num = as.integer(readline()) 
if (num%%2==0){
  print("even")
} else {
  print("odd")
}

# Array and For Each
x = c(1,2,3,4,5)
print(paste(x, typeof(x)))

# Loop
x = 10
y = 20
for (i in x:y){
  print(i)
}

#
vec = c(5,3,6,2,4)
for (i in vec){
  print(i)
}

#
m = matrix(1:9, nrow=3, ncol=3)
print(m)