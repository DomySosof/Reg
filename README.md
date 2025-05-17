![Untitled-2025-05-15-1730](https://github.com/DomySosof/Reg/blob/d95e948b6afc6b63e4b589bbe7fb7dff4ac3ccbf)

# Docker Init


## Data persistente 

```
mkdir -p /home/inh/Reg/data
```
```
docker run -p 49160:3000 -v /home/inh/Reg/data:/app/data ingre-egreso
```


## Data temporal 
```
docker build --no-cache -t ingre-egreso .
```

```
docker run -p 49160:3000 ingre-egreso
```
