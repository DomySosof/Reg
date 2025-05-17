![Untitled-2025-05-15-1730](https://github.com/user-attachments/assets/5de3f512-98c1-4891-87a6-7c72bc67f974)



# Docker Init

// optional :

mkdir -p /home/inh/Reg/data

```
docker build --no-cache -t ingre-egreso .
```

// optional :   

docker run -p 49160:3000 -v /home/inh/Reg/data:/app/data ingre-egreso


```
docker run -p 49160:3000 ingre-egreso
```