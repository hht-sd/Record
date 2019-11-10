# 仅记录Linux #
/etc/nginx/
vim打开
ls 横向展示文件列表

w
q

        location / {
              alias /usr/www/;
              index index.html;
              try_files $uri $uri/ /index.html;
        }    
        location /manager_hht/ {
              alias /usr/www/manager_hht/;
              index index.html; 
        }
        location /science/{
              alias /usr/www/science/;
              index index.html;
        }
