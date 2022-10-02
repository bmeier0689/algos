def zip_it(arr1, arr2):
    larger_arr= arr1 if len(arr1)> len(arr2) else arr2
    new_arr=[]
    for i in range(len(larger_arr)):
        if i <= (len(arr1))-1:
            new_arr.append(arr1[i])
        if i <= (len(arr2))-1:
            new_arr.append(arr2[i])
    return new_arr

print(zip_it([4,15,100], [10,20,30,40]))