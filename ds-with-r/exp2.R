# 1. Read the mtcars dataset and display the entire dataset
data<-mtcars
print("Original Dataset:")
print(data)
# 2. Display head and tail of the dataset
print("Head of the Dataset:")
print(head(data))
print("Tail of the Dataset:")
print(tail(data))
# 3. Add some dummy rows with missing values in the dataset
dummy_data <- data.frame(mpg = c(NA, 30), cyl = c(6, 8), disp = c(250, NA), hp = c(150, 200),
                            drat = c(3.9, NA), wt = c(2.5, 3.0), qsec = c(18.5, 17.2), vs = c(1, NA),
                            am = c(1, 0), gear = c(4, 5), carb = c(2, 4))
mtcars_with_dummy <- rbind(data, dummy_data)

# 4. Display the entire dataset again after adding dummy rows
print("Entire Dataset After Adding Dummy Rows:")
print(mtcars_with_dummy)
# 5. Data handling techniques
# a) Storing 0 for missing values
mtcars_with_dummy$mpg[is.na(mtcars_with_dummy$mpg)] <- 0
mtcars_with_dummy$disp[is.na(mtcars_with_dummy$disp)] <- 0
mtcars_with_dummy$drat[is.na(mtcars_with_dummy$drat)] <- 0
mtcars_with_dummy$vs[is.na(mtcars_with_dummy$vs)] <- 0
print("Dataset After Replacing Missing Values with 0:")
print(mtcars_with_dummy)
#(repeat step 3 and 4 again)
# b) Omitting rows with missing values(repeat step 3 and 4 again)
mtcars_no_na <- na.omit(mtcars_with_dummy)
print("Dataset After Omitting Rows with Missing Values:")
print(mtcars_no_na)
#(repeat step 3 and 4 again)
# c) Storing mean for missing values (for the columns where mean is applicable)
mtcars_with_dummy$mpg[is.na(mtcars_with_dummy$mpg)] <- mean(mtcars_with_dummy$mpg,
                                                               na.rm = TRUE)
mtcars_with_dummy$disp[is.na(mtcars_with_dummy$disp)] <- mean(mtcars_with_dummy$disp, na.rm
                                                                 = TRUE)

print("Dataset After Replacing Missing Values with Mean:")
print(mtcars_with_dummy)
# 6. Visualization techniques
# a) Line plot: mpg over rows (Index)
plot(mtcars$mpg, type = "l", main = "Line Plot of mpg", xlab = "Index", ylab = "Miles Per Gallon", col =
       "blue")
# b) Histogram of &#39;mpg&#39;
hist(mtcars$mpg, main = "Histogram of MPG", xlab = "Miles Per Gallon", col = "green", border = "black",
     breaks = 10)
# c) Scatter plot between mpg and hp (horsepower)
plot(mtcars$mpg, mtcars$hp, main = "Scatter Plot of mpg vs hp", xlab = "Miles Per Gallon", ylab =
       "Horsepower", pch = 19, col = "red")
# 7. Basic Feature Engineering
# Renaming columns in the dataset
colnames(mtcars_with_dummy)
colnames(mtcars_with_dummy) <- c("Fuel Efficiency", "Cylinders", "Displacement", "Horsepower",
                                    "Rear Axle Ratio", "Weight", "Quarter Mile Time", "V/S", "Transmission", "Gear", "Carburetor")
colnames(mtcars_with_dummy)
print("Dataset After Renaming Columns:")
print(mtcars_with_dummy)