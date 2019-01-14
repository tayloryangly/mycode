#<center>Contos7安装git</center>
##一、服务器端
###1、检查是否已安装git
    git --version
###2、安装git
    yum install -y git
###3、创建git用户组和用户
    groupadd git
    useradd git -g git
    passwd  git
>groupadd git -- 创建用户组  
>useradd git -g git -- 创建用户并将此用户加入到git组  
>passwd  git -- 设置密码
###4、禁止该git用户使用shell登录系统
    vi /etc/passwd
>按i进入编辑模式，在最后一行将git用户修改成以下配置

    git:x:1000:1000::/home/git:/usr/bin/git-shell

>按ESC退出编辑模式，输入 “:wq” 保存并且退出vi模式
###5、创建证书登录
>收集所有需要登录用户的公钥，公钥位于id\_rsa.pub文件中  
>若客户端需要免密登录，则要将客户端的公钥添加到/home/git/.ssh/authorized_keys文件中

    cd /home/git/
    mkdir .ssh
    chmod 755 .ssh
    touch .ssh/authorized_keys
    chmod 644 .ssh/authorized_keys
    chown -R git:git .ssh
###6、修改配置文件
    vi /etc/ssh/sshd_config
>按i进入编辑模式，打开RSA认证  
  
    RSAAuthentication yes     
    PubkeyAuthentication yes     
    AuthorizedKeysFile  .ssh/authorized_keys
>按ESC退出编辑模式，输入 “:wq” 保存并且退出vi模式  
>>CentOS7.4开始弃用RSAAuthentication支持，因此CentOS7.4以上用户请忽略RSAAuthentication设置
####重启sshd
>重启sshd

    systemctl restart sshd.service
>测试SSH是否可连接

     ssh -T git@192.168.34.130
>查看SSH状态

    systemctl status sshd.service
###7、初始化Git仓库
    cd /home
    mkdir gitrepo
    chown git:git gitrepo/
    cd gitrepo
    git init --bare runoob.git

>设置权限

    chown -R git:git runoob.git
    chmod -R 775 runoob.git
##二、客户端
###1、配置用户
>在git bash中，输入以下命令，配置使用git的用户

    git config --global user.name "taylor"
    git config --global user.email "luyao_accp@sina.com"
###2、创建密钥
>在git bash中，输入以下命令，为用户创建一个密钥

    ssh-keygen -t rsa -C "luyao_accp@sina.com"
###3、配置公钥
####客户端
>####Windows
>公钥文件路径
>
    C:\Users\Administrator\.ssh\id_rsa.pub

>使用记事本或其他程序打开该文件，将该文件中的内容Ctrl+A全选后复制

####服务器端
>    
    vi /home/git/.ssh/authorized_keys
按i进入编辑模式，将以上复制的内容粘贴到authorized_keys文件中（一行一个）    
按ESC退出编辑模式，输入 “:wq” 保存并且退出vi模式
###4、测试仓库
>克隆远程仓库

    git clone git@192.168.34.130:/home/gitrepo/runoob.git